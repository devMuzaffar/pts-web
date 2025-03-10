import Joi from "joi";
import bcrypt from "bcryptjs";
import prisma from "@/prisma/index.js";
import errorHandler from "@/app/lib/errorHandler.js";
import { NextResponse } from "next/server.js";
import JWTService from "@/app/services/JWTService";
import { cookies } from "next/headers";
import UserDTO from "@/app/dto/user";
const numberPattern = /^\+?\d{1,4}(\s?\d{1,4}){1,3}$/;
const dobPattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
const unAuthError = {
  status: 401,
  message: "Unauthorized",
};

// Complete THis Field. Upserts optional fields
// Rename update to route.js

export async function PUT(req) {
  const requestBody = await req.json();

  // 1. get access Token from cookies
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;

  // 2. Validate Password Inputs
  const updateUserSchema = Joi.object({
    name: Joi.string().min(5).max(30).required(),
    whatsappNumber: Joi.string().pattern(numberPattern).allow(""),
    phoneNumber: Joi.string().pattern(numberPattern).allow(""),
    gender: Joi.string().min(3).max(7).allow(""),
    dob: Joi.string().pattern(dobPattern).allow(""),
    address: Joi.string().allow(""),
    country: Joi.string().allow(""),
    city: Joi.string().allow(""),
    lastInstitute: Joi.string().allow(""),
    degrees: Joi.array(),
  });

  const { error } = updateUserSchema.validate(requestBody);

  // 3. If validation error, return error
  if (error) {
    return errorHandler(error);
  }

  // Grab Values from Request Body
  const {
    name,
    whatsappNumber,
    phoneNumber,
    gender,
    dob,
    address,
    country,
    city,
    lastInstitute,
    degrees,
  } = requestBody;

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
  } catch (error) {
    return errorHandler(error);
  }

  // 6. Update New Fields in DB of User
  let updatedUser;
  try {
    const updateData = {
      name: name || undefined,
      username: user.username,
      password: user.password,
      email: user.email,
      role: user.role,
      whatsappNumber: whatsappNumber || undefined,
      phoneNumber: phoneNumber || undefined,
      gender: gender || undefined,
      dob: dob || undefined,
      address: address || undefined,
      country: country || undefined,
      city: city || undefined,
      lastInstitute: lastInstitute || undefined,
      degrees: degrees || undefined,
    };

    updatedUser = await prisma.user.upsert({
      where: {
        id: user.id,
      },
      update: {
        ...updateData,
        name: name,
      },
      create: updateData,
    });

  } catch (error) {
    return errorHandler(error);
  }

  // 7. Response with updated User's Data
  const userDto = new UserDTO(updatedUser);
  const response = NextResponse.json(
    { user: userDto, message: "Profile Successfully Updated" },
    { status: 200 }
  );

  return response;
}
