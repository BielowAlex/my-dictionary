import { dbConnect } from "@/lib";
import { User } from "@/models";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();

  try {
    const users = await User.find({});

    console.log("users", users);

    return NextResponse.json(users);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
