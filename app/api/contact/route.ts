import { NextResponse } from "next/server";
import connectDB from "@/lib/connectdb";
import Contact from "@/models/contact";

export async function GET() {
  return NextResponse.json({ ok: true, msg: "Contact API is reachable" });
}

export async function POST(req: Request) {
  try {
    // Guard against empty or invalid JSON body to avoid "Unexpected end of JSON input"
    const text = await req.text();
    if (!text) {
      return NextResponse.json({ success: false, error: "Empty request body" }, { status: 400 });
    }

    let body: any;
    try {
      body = JSON.parse(text);
    } catch (err) {
      return NextResponse.json({ success: false, error: "Invalid JSON body" }, { status: 400 });
    }

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
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
