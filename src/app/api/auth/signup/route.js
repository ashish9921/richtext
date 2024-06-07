import User from "@/models/User";
import { hashPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();

    const { email, password } = await req.json();
    console.log({ email, password });
    if (!email || !password)
      return NextResponse.json(
        { error: "plese enter creditial" },
        { status: 422 }
      );

    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser)
      return NextResponse.json(
        { error: "user is exist" },
        { status: 422 }
      );
    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({ email, password: hashedPassword });
    console.log(newUser);

    return NextResponse.json(
      { message: "login successful" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "somthing wrong" },
      { status: 500 }
    );
  }
};
