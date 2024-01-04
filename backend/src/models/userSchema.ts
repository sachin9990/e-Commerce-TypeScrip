import mongoose from "mongoose";
import validator from "validator";

// The Document interface is provided by Mongoose and represents a document in a MongoDB collection. By extending Document, you're essentially saying that instances of IUser will have the properties and methods of a Mongoose document.
interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: "admin" | "user";
  gender: "male" | "female";
  dob: Date;
  createdAt: Date;
  updatedAt: Date;
  //   Virtual Attribute
  age: number;
}

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, required: [true, "Please enter Id"] },
    name: { type: String, required: [true, "Please enter name"] },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Please enter email"],
      validate: validator.default.isEmail,
    },
    photo: { type: String, required: [true, "Please enter photo"] },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: [true, "Please enter photo"],
    },
    dob: {
      type: Date,
      required: [true, "Please enter Date of Birth"],
    },
  },
  { timestamps: true }
);

userSchema.virtual("age").get(function () {
  const today = new Date();
  const dob = this.dob;
  let age = today.getFullYear() - dob.getFullYear();

  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
});

export const UserSchemaModel = mongoose.model<IUser>("User", userSchema);
