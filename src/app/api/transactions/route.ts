import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("POST /api/transactions");

  return NextResponse.json({ status: "OK" });
}
