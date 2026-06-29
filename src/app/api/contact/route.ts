import { NextResponse } from "next/server";
import { addInquiry } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, interest, industry, message } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    const newInquiry = addInquiry({
      name,
      email,
      interest: interest || "General QE",
      industry: industry || "Other",
      message: message || "",
    });

    return NextResponse.json(
      { success: true, inquiry: newInquiry },
      { status: 201 }
    );
  } catch (error) {
    console.error("API POST contact error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
