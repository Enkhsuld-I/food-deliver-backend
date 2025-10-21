import bcrypt from "bcrypt";
import { connectDB } from "@/lib/connectDB";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

 
export const POST = async (request: Request) => {
  await connectDB();
 
  const body = await request.json();
  const { passsword, email } = body;
  const hashPassword = bcrypt.hashSync(passsword, 1);
  const user = await User.create({
    email: email,
    passsword: hashPassword,
    role: "user",
  });
  return NextResponse.json({ message: "bolsoon", user });
};
 
 