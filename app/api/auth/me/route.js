import { getCurrentUser } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return NextResponse.json(
        { error: "You are not authenticated" },
        { status: 401 },
      );
    }
    return NextResponse.json(user);
  } catch (error) {
    console.log("error:", error);
    return NextResponse.json({ error: "internal server" }, { status: 500 });
  }
}
