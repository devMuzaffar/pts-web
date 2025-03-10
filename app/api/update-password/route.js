import Joi from "joi";
import bcrypt from "bcryptjs";
import prisma from "@/prisma/index.js";
import errorHandler from "@/app/lib/errorHandler.js";
import { NextResponse } from "next/server.js";
import JWTService from "@/app/services/JWTService";
import { cookies } from "next/headers";
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;
const unAuthError = {
  status: 401,
  message: "Unauthorized",
};

export async function POST(req) {
  const requestBody = await req.json();

  // 1. get access Token from cookies
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  // 2. Validate Password Inputs
  const updatePasswordSchema = Joi.object({
    oldPassword: Joi.string().pattern(passwordPattern).required(),
    newPassword: Joi.string()
      .pattern(passwordPattern)
      .required()
      .invalid(Joi.ref("oldPassword")),
    confirmPassword: Joi.string()
      .pattern(passwordPattern)
      .required()
      .valid(Joi.ref("newPassword")),
  });

  const { error } = updatePasswordSchema.validate(requestBody);

  // 3. If validation error, return error
  if (error) {
    return errorHandler(error);
  }

  // Grab Old and New Password
  const { oldPassword, newPassword } = requestBody;

  // 4. verify Access Token
  let id;
  try {
    id = JWTService.verifyAccessToken(accessToken)._id;
  } catch (e) {
    return errorHandler(unAuthError);
  }

  // 5. match userId
  let user;
  try {
    user = await prisma.user.findUnique({ where: { id: id } });

    // match User
    if (!user) {
      const error = {
        status: 401,
        message: "Invalid User",
      };
      return errorHandler(error);
    }

    // match oldPassword with User's Password
    const match = await bcrypt.compare(oldPassword, user.password);

    if (!match) {
      const error = {
        status: 401,
        message: "Invalid password",
      };
      return errorHandler(error);
    }
  } catch (error) {
    return errorHandler(error);
  }

  // 6. Update password witn new Password in DB
  try {
    // Encrypt new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
      },
    });
  } catch (error) {
    return errorHandler(error);
  }

  // 7. Response
  const response = NextResponse.json(
    { message: "Password Successfully Changed" },
    { status: 200 }
  );

  return response;
}
