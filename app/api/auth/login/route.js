import { generateToken, verifyPassword } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          error: "Email & Password is required or not valid",
        },
        { status: 400 },
      );
    }

    const userFromDb = await prisma.user.findUnique({ where: { email } });

    if (!userFromDb) {
      return NextResponse.json(
        { message: "invalid user not found" },
        { status: 401 },
      );
    }
    const isValidPassword = await verifyPassword(password, userFromDb.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { message: "invalid credentials" },
        { status: 401 },
      );
    }

    const token = await generateToken(userFromDb);

    const response = NextResponse.json({
      user: {
        id: userFromDb.id,
        name: userFromDb.name,
        email: userFromDb.email,
        image: userFromDb.image,
        emailVerified: userFromDb.emailVerified,
        token,
      },
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("login failed", error);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 },
    );
  }
}
