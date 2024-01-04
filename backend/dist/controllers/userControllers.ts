import { UserSchemaModel } from "../models/userSchema.js";

export const newUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { name, email, photo, gender, role, _id, dob } = req.body;
    await UserSchemaModel.create({
      name,
      email,
      photo,
      gender,

      _id,
      dob,
    });
  } catch (error) {
    console.log("Error---->", error);
  }
};
