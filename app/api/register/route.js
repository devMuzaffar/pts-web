import Joi from "joi";
import bcrypt from "bcryptjs";
import prisma from "@/prisma/index.js";
import UserDTO from "@/app/dto/user.js";
import JWTService from "@/app/services/JWTService.js";
import errorHandler from "@/app/lib/errorHandler.js";
import { NextResponse } from "next/server.js";
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,25}$/;

// User
// res
// res.cookie           - replaced by NextResponse -> response.cookies.set();
// Req                  - req.body; replaced by req.json();

// return next(error);      - Replaced by custom errorHandler(error);

export async function POST(req) {
  const requestBody = await req.json();

  // 1. Validate User Input
  const userRegisterSchema = Joi.object({
    username: Joi.string().min(5).max(30).required(),
    name: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(passwordPattern).required(),
    confirmPassword: Joi.ref("password"),
    role: Joi.string().valid('user', 'User', 'admin', 'Admin').required(),
  });

  const { error } = userRegisterSchema.validate(requestBody);

  // 2. if error in validation -> return error via middleware
  if (error) {
    return errorHandler(error);
  }

  // 3. if email or username is alreayd registered -> return an error
  const { username, name, email, password, role } = requestBody;
  
  try {
    const emailInUse = await prisma.user.findUnique({ where: { email } });
    const usernameInUse = await prisma.user.findUnique({ where: { username } });

    // Throws error if Email is found/true
    if (emailInUse) {
      const error = {
        status: 409,
        message: "Email Already Registered, use Another Email",
    };
      return errorHandler(error);
    }

    // Throws error if username is found/true
    if (usernameInUse) {
      const error = {
        status: 409,
        message: "Username not available, Choose another username!",
      };
      return errorHandler(error);
    }

  } catch (error) {
    return errorHandler(error);
  }

  // 4. password hash
  const hashedPassword = await bcrypt.hash(password, 10);

  // 5. store user data in Database
  let accessToken;
  let refreshToken;
  let user;

  try {
    user = await prisma.user.create({
      data: {
        username,
        email,
        name,
        password: hashedPassword,
        role,
      },
    });

    // Token Generation
    accessToken = JWTService.signAccessToken({ _id: user.id }, "30m");
    refreshToken = JWTService.signRefreshToken({ _id: user.id }, "60m");
  } catch (error) {
    return errorHandler(error);
  }

  // Store Refresh & Access Token in DB
  await JWTService.storeRefreshToken(refreshToken, user.id);

  // DTO with Response
  const userDto = new UserDTO(user);
  const response = NextResponse.json(
    { user: userDto, auth: true },
    { status: 201 }
  );

  // Store Refresh & Access Token in Cookies (client)
  response.cookies.set("accessToken", accessToken, {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,
    secure: true,
  });
  response.cookies.set("refreshToken", refreshToken, {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,
    secure: true,
  });

  // 6. response send
  return response;
}
