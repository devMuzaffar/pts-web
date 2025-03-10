import Joi from "joi";
import prisma from "@/prisma/index.js";
import errorHandler from "@/app/lib/errorHandler.js";
import { NextResponse } from "next/server.js";
import JWTService from "@/app/services/JWTService";
import { cookies } from "next/headers";
import { v2 as cloudinary } from "cloudinary";
const unAuthError = {
  status: 401,
  message: "Unauthorized",
};

// This route will simply update profile picture
// Returns URL of profile in JSON response

export async function PUT(req) {
  const requestBody = await req.json();

  // 1. get access Token from cookies
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  // 2. Validate Image with type
  const updatePasswordSchema = Joi.object({
    profile: Joi.string().required(),
  });

  const { error } = updatePasswordSchema.validate(requestBody);

  // 3. If validation error, return error
  if (error) {
    return errorHandler(error);
  }

  // 4. Grab Image Path from Client
  const { profile } = requestBody;

  // 5. verify Access Token
  let id;
  try {
    id = JWTService.verifyAccessToken(accessToken)._id;
  } catch (e) {
    return errorHandler(unAuthError);
  }

  // 6. match userId
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
  } catch (error) {
    return errorHandler(error);
  }

  // 7. Cloudinary Cloud Upload Config
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });

  // 8. Upload Image and Get its URL
  let cloudinary_response;
  try {
    cloudinary_response = await cloudinary.uploader.upload(profile);
  } catch (error) {
    return errorHandler(error);
  }

  // 6. Update / Create Image in DB
  let updatedUser;
  try {
    // These Fields are required as they're mentioned Required in Schema
    const defaultFields = {
      name: user.name,
      username: user.username,
      email: user.email,
      password: user.password,
      role: user.role,
    };
    updatedUser = await prisma.user.upsert({
      where: {
        id: user.id,
      },
      update: {
        profile: cloudinary_response.url,
      },
      create: {
        ...defaultFields,
        profile: cloudinary_response.url,
      },
    });
  } catch (error) {
    console.log(error.stack);
    return errorHandler(error);
  }

  // 7. Response
  const response = NextResponse.json(
    { message: "Profile Updated", profile: updatedUser.profile },
    { status: 200 }
  );

  return response;
}
