import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  _id: string;
  username: string;
  email: string;
  avatar: string;
}

const userSchema: Schema = new mongoose.Schema({
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
});

export const User = mongoose.model<IUser>("users", userSchema);
