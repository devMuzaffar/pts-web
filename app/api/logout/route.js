import errorHandler from "@/app/lib/errorHandler";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers'
import prisma from "@/prisma/index";

export async function POST(req) {
  // 1. delete refresh token from db
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;

  try {
    await prisma.refreshToken.delete({
      where: {
        token: refreshToken,
      },
    });
  } catch (error) {
    return errorHandler(error);
  }

  const response = NextResponse.json(
    { user: null, auth: false },
    { status: 200 }
  );

  // delete cookies
  response.cookies.delete("accessToken");
  response.cookies.delete("refreshToken");

  // 2. response
  return response;
}
