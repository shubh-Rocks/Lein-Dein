// app/api/auth/register/route.js
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { hashPassword, generateToken } from "@/lib/auth";
import { registerSchema } from "@/lib/validations";
import { z } from "zod";
import prisma from "@/lib/prisma";

// export async function POST(request) {
//   try {
//     const body = await request.json();

//     // Step 1: Zod se validate karo
//     const result = registerSchema.safeParse(body);
//     if (!result.success) {
//       return NextResponse.json(
//         {
//           error: "Validation failed",
//           details: z.flattenError(result.error),
//         },
//         { status: 400 },
//       );
//     }

//     const { name, email, password, phone } = result.data;

//     // Step 2: Check karo email already registered hai ya nahi
//     const existingUser = await prisma.user.findUnique({ where: { email } });
//     if (existingUser) {
//       return NextResponse.json(
//         { error: "Email already registered" },
//         { status: 409 },
//       );
//     }

//     // Step 3: Password hash karo aur user create karo

//     const hashedPassword = await hashPassword(password);

//     const user = await prisma.user.create({
//       data: {
//         name,
//         email,
//         password: hashedPassword,
//         phone: phone === "" ? null : phone,
//       },
//     });

//     // Step 4: Token generate karke cookie mein set karo
//     const token = await generateToken(user);
//     const cookieStore = await cookies();
//     cookieStore.set("token", token, {
//       httpOnly: true,
//       secure: process.env.NODE_ENV === "production",
//       sameSite: "lax",
//       maxAge: 60 * 60 * 24 * 7,
//       path: "/",
//     });

//     // Step 5: Response bhejo (password kabhi mat bhejo!)
//     return NextResponse.json(
//       { id: user.id, name: user.name, email: user.email },
//       { status: 201 },
//     );
//   } catch (error) {
//     console.error("Register Error:", error);
//     return NextResponse.json(
//       { error: "Something went wrong" },
//       { status: 500 },
//     );
//   }
// }

export async function POST(request) {
  try {
    const body = await request.json();

    const result = registerSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: z.flattenError(result.error),
        },
        { status: 400 },
      );
    }

    const { name, email, password, phone } = result.data;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 },
      );
    }
    const hashedPassword = await hashPassword(password);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        phone: phone === "" ? null : phone,
        image: null,
        emailVerified: null,
      },
    });

    const token = await generateToken(user);

    const cookieStore = await cookies();

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return NextResponse.json(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      
      { status: 201 },
    );
  } catch (error) {
    console.error("registrtion failed");
    return NextResponse.json(
      {
        error: "Somthing went wrong",
      },
      { status: 500 },
    );
  }
}
