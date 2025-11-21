import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/contact";

export async function POST(req:Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    await connectDB();

    const saved = await Contact.create({ name, email, message });
    console.log("Saved Contact:", saved);

    return NextResponse.json({
      success: true,
      msg: "Message saved in database",
      data: saved,
    });

  } catch (error) {
    console.log("ERROR:", error);
    // Return a serializable error message so the client can read it
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
