import { dbConnect } from "@/lib";
import { NextResponse } from "next/server";
import Users from "@/models/users/UserModel";
import { getSession } from "next-auth/react";

export async function GET() {
  const session = await getSession();

  if (!session) {
    return NextResponse.json(
      { error: "Access denied. Please sign-in" },
      { status: 401 }
    );
  }

  await dbConnect();

  try {
    const users = await Users.find({});

    console.log("users", users);

    return NextResponse.json(users);
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
