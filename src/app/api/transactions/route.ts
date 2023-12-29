import { NextRequest, NextResponse } from "next/server";
import {
  isValidAddress,
  isValidCity,
  isValidCountry,
  isValidEmail,
  isValidEmoneyNumber,
  isValidEmoneyPin,
  isValidName,
  isValidPhone,
  isValidZip,
} from "../../Utilities/formValidation";
import { CustomerInfo, TransactionInfo } from "../../Types/Interfaces";
import prisma from "../../Utilities/prismaUtils";
import { PAYMENT_METHOD } from "../../Types/Enums";

export async function POST(request: NextRequest) {
  console.log("POST /api/transactions");

  // get data
  const {
    customerInfo,
    transactionInfo,
  }: { customerInfo: CustomerInfo; transactionInfo: TransactionInfo } =
    await request.json();

  console.log("customerInfo ", customerInfo);
  console.log("transactionInfo", transactionInfo);

  // check if not yet existing customer
  const existingCustomer = await prisma.customer.findUnique({
    where: {
      email: customerInfo.email,
    },
  });

  // check valid payment method first
  if (transactionInfo.paymentMethod === PAYMENT_METHOD.EMONEY) {
    if (
      !transactionInfo.eMoneyNumber ||
      !transactionInfo.eMoneyPin ||
      !isValidEmoneyNumber(transactionInfo.eMoneyNumber) ||
      !isValidEmoneyPin(transactionInfo.eMoneyPin)
    ) {
      return NextResponse.json(
        {
          errorMessage: "Invalid payment method information",
        },
        {
          status: 400,
        }
      );
    }
  }

  if (!existingCustomer) {
    // do validation
    if (
      !isValidName(customerInfo.name) ||
      !isValidEmail(customerInfo.email) ||
      !isValidPhone(customerInfo.phone) ||
      !isValidAddress(customerInfo.address) ||
      !isValidZip(customerInfo.zipcode) ||
      !isValidCity(customerInfo.city) ||
      !isValidCountry(customerInfo.country)
    ) {
      return NextResponse.json(
        {
          errorMessage: "Invalid parameters found.",
          name: isValidName(customerInfo.name),
          email: isValidEmail(customerInfo.email),
          phone: isValidPhone(customerInfo.phone),
          address: isValidAddress(customerInfo.address),
          zipcode: isValidZip(customerInfo.zipcode),
          city: isValidCity(customerInfo.city),
          country: isValidCountry(customerInfo.country),
        },
        {
          status: 400,
        }
      );
    }
  }

  // store transaction

  return NextResponse.json({ status: "OK" });
}
