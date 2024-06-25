import mongoose, { Document, Model, Schema } from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface IUserDocument extends Document {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

const userSchema: Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

const Users: Model<IUserDocument> =
  mongoose.models.users || mongoose.model<IUserDocument>("users", userSchema);

export default Users;
