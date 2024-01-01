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
import {
  CustomerInfo,
  OrderItem,
  TransactionInfo,
} from "../../Types/Interfaces";
import prisma from "../../Utilities/prismaUtils";
import { PAYMENT_METHOD } from "../../Types/Enums";
import { PaymentMethod } from "@prisma/client";

export async function POST(request: NextRequest) {
  console.log("POST /api/transactions");

  let dbCustomerInfo = undefined;

  // get data
  const {
    customerInfo,
    transactionInfo,
  }: { customerInfo: CustomerInfo; transactionInfo: TransactionInfo } =
    await request.json();
  if (!customerInfo || !transactionInfo) {
    return NextResponse.json(
      {
        errorMessage: "Invalid parameters",
      },
      {
        status: 400,
      }
    );
  }

  console.log("customerInfo ", customerInfo);
  console.log("transactionInfo", transactionInfo);

  // check if not yet existing customer
  dbCustomerInfo = await prisma.customer.findUnique({
    where: {
      email: customerInfo.email,
    },
  });
  console.log("dbCustomerInfo ", dbCustomerInfo);

  // validate transaction data
  // check valid payment method
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

  // validate other transaction information
  if (
    transactionInfo.shippingFee < 0 ||
    transactionInfo.vatRate < 0 ||
    transactionInfo.vatRate > 1 ||
    transactionInfo.orders.length < 1
  ) {
    return NextResponse.json(
      {
        errorMessage: "Invalid parameters inside transaction info",
      },
      {
        status: 400,
      }
    );
  }

  if (!dbCustomerInfo) {
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

    // store the new customer info
    dbCustomerInfo = await prisma.customer.create({
      data: {
        name: customerInfo.name,
        email: customerInfo.email,
        phone: customerInfo.phone,
        address: customerInfo.address,
        city: customerInfo.city,
        zipcode: customerInfo.zipcode,
        country: customerInfo.country,
      },
    });
  }

  // store transaction
  const newDbTransactionInfo = await prisma.transaction.create({
    data: {
      customerId: dbCustomerInfo.id,
      paymentMethod:
        transactionInfo.paymentMethod === PAYMENT_METHOD.EMONEY
          ? PaymentMethod.EMONEY
          : PaymentMethod.COD,
      eMoneyNumber: transactionInfo.eMoneyNumber,
      eMoneyPin: transactionInfo.eMoneyPin,
      shippingFee: transactionInfo.shippingFee,
      vatRate: transactionInfo.vatRate,
    },
  });
  if (!newDbTransactionInfo) {
    return NextResponse.json(
      {
        errorMessage: "Unable to create new transaction in database",
      },
      {
        status: 500,
      }
    );
  }

  // store orders
  const dbStoredOrders = await Promise.all(
    transactionInfo.orders.map(async (order: OrderItem) => {
      const dbStoredOrder = await prisma.orderItem.create({
        data: {
          productId: order.productId,
          quantity: order.quantity,
        },
      });

      return dbStoredOrder;
    })
  );

  return NextResponse.json({
    dbCustomerInfo,
    newDbTransactionInfo,
    dbStoredOrders,
  });
}
