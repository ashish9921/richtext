import Text from "../../../../models/richText";

import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectDB();

    const { text } = await req.json();
    console.log({ text });
    if (!text)
      return NextResponse.json(
        { error: "plese enter text" },
        { status: 422 }
      );

    
    
    const newText = await Text.create({ text });
    console.log(newText);

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
