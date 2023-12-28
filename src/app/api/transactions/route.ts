import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("POST /api/transactions");

  // get data
  const { customerInfo, transactionInfo } = await request.json();

  console.log("customerInfo ", customerInfo);
  console.log("transactionInfo", transactionInfo);

  // validate

  // store customer info if not yet existing

  // store transaction

  return NextResponse.json({ status: "OK" });
}
