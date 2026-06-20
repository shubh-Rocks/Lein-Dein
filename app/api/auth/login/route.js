import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export  async function POST(request){
    const {email,password}= await request.json()

    
}