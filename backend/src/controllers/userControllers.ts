import { NextFunction, Request, Response } from "express";
import { NewUserRequestBody } from "../types/types.js";
import { UserSchemaModel } from "../models/userSchema.js";
import ErrorHandler from "../utils/utilityClass.js";

export const newUser = async (
  req: Request<{}, {}, NewUserRequestBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    // return next(new ErrorHandler());
    console.log(req.body);
    const { name, email, photo, gender, _id, dob } = req.body;
    await UserSchemaModel.create({
      name,
      email,
      photo,
      gender,

      _id,
      dob: new Date(dob),
    });
  } catch (error) {
    console.log("Error---->", error);
  }
};
