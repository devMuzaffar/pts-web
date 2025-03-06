import Joi from "joi";
import bcrypt from "bcryptjs";
import prisma from "@/prisma/index.js";
import errorHandler from "@/app/lib/errorHandler.js";
import { NextResponse } from "next/server.js";
import JWTService from "@/app/services/JWTService";
import UserDTO from "@/app/dto/user";
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

export async function POST(req) {
  const requestBody = await req.json();

  // 1. Validate User Input
  const userLoginSchema = Joi.object({
    username: Joi.string().min(5).max(30).required(),
    password: Joi.string().pattern(passwordPattern).required(),
  });

  console.log(requestBody)

  const { error } = userLoginSchema.validate(requestBody);

  // 2. If validation error, return error
  if (error) {
    return errorHandler(error);
  }

  // 3. match username and password
  const { username, password } = requestBody;
  let user;

  try {
    user = await prisma.user.findUnique({ where: { username: username } });

    // match username
    if (!user) {
      const error = {
        status: 401,
        message: "Invalid username",
      };
      return errorHandler(error);
    }

    // match password
    const match = await bcrypt.compare(password, user.password);

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

  // 4. return response
  const accessToken = JWTService.signAccessToken({ _id: user.id }, "30m");
  const refreshToken = JWTService.signRefreshToken({ _id: user.id }, "60m");

  // Update refresh Token in DB
  try {
    await prisma.refreshToken.upsert({
      where: {
        userId: user.id,
      },
      update: {
        token: refreshToken,
      },
      create: {
        userId: user.id,
        token: refreshToken,
      },
    });
  } catch (error) {
    return errorHandler(error);
  }

  // DTO with Response
  const userDto = new UserDTO(user);
  const response = NextResponse.json(
    { user: userDto, auth: true },
    { status: 200 }
  );

  // Store Tokens in Cookies
  response.cookies.set("accessToken", accessToken, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: true,
  });

  response.cookies.set("refreshToken", refreshToken, {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: true,
  });

  return response;
}
