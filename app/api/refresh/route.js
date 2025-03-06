import UserDTO from "@/app/dto/user.js";
import errorHandler from "@/app/lib/errorHandler";
import JWTService from "@/app/services/JWTService";
import { NextResponse } from "next/server.js";
import prisma from "@/prisma/index";
import { cookies } from "next/headers";
const unAuthError = {
  status: 401,
  message: "Unauthorized",
};

export async function GET(req) {
  // 1. get refreshtoken from cookies
  const cookieStore = await cookies();
  const originalRefreshToken = cookieStore.get("refreshToken")?.value;

  // 2. verify refresh token
  let id;
  try {
    id = JWTService.verifyRefreshToken(originalRefreshToken)._id;
  } catch (e) {
    return errorHandler(unAuthError);
  }

  // 3. generate new tokens
  try {
    const match = await prisma.refreshToken.findUnique({
      where: {
        userId: id,
        token: originalRefreshToken,
      },
    });

    if (!match) {
      return errorHandler(unAuthError);
    }
  } catch (e) {
    return errorHandler(e);
  }

  //   const user = await User.findOne({ _id: id });
  const user = await prisma.user.findUnique({ where: { id: id } });
  const userDto = new UserDTO(user);
  const response = NextResponse.json(
    { user: userDto, auth: true },
    { status: 200 }
  );

  try {
    const accessToken = JWTService.signAccessToken({ _id: id }, "30m");
    const refreshToken = JWTService.signRefreshToken({ _id: id }, "60m");
    await prisma.refreshToken.update({
      where: { userId: id },
      data: { token: refreshToken },
    });
    const options = {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    };

    response.cookies.set("accessToken", accessToken, options);
    response.cookies.set("refreshToken", refreshToken, options);
  } catch (e) {
    return errorHandler(e);
  }

  // 4. update db, return response
  return response;
}
