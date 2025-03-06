import { NextResponse } from "next/server";
import Joi from "joi";

// res - Replaced by NextResponse

const errorHandler = (error) => {
  // default error
  let status = 500;
  let data = {
    message: "Internal Server Error",
  };

  if (error instanceof Joi.ValidationError) {
    status = 401;
    data.message = error.message;

    // return res.status(status).json(data);
    return NextResponse.json(data, { status });
  }

  if (error.staus) {
    status = error.status;
  }

  if (error.message) {
    data.message = error.message;
  }

  // return res.status(status).json(data);
  return NextResponse.json(data, { status });
};

export default errorHandler;