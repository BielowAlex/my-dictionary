import { NextResponse } from "next/server";
import { dbConnect } from "@/lib";
import Users from "@/models/users/UserModel";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession();

  if (!session) {
    return NextResponse.json(
      { error: "Access denied. Please sign-in" },
      { status: 401 }
    );
  }

  await dbConnect();
  try {
    const currentUser = await Users.findOne({ email: session.user?.email });

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(currentUser, { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
