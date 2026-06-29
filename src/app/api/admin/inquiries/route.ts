import { NextResponse } from "next/server";
import { getInquiries, deleteInquiry } from "@/lib/db";

function isAuthorized(request: Request): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD || "ty-admin-2026";
  const authHeader = request.headers.get("X-Admin-Password");
  return authHeader === adminPassword;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
  }

  const inquiries = getInquiries();
  // Return inquiries sorted latest first
  const sorted = [...inquiries].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return NextResponse.json({ inquiries: sorted });
}

export async function DELETE(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized access." }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Inquiry ID is required." }, { status: 400 });
    }

    const success = deleteInquiry(id);

    if (!success) {
      return NextResponse.json({ error: "Inquiry not found." }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API DELETE inquiry error:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
