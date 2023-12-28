import { CustomerInfo, TransactionInfo } from "../Types/Interfaces";

/**
 * Store the customer and transaction info into the database
 * @param customerInfo      Customer information
 * @param transactionInfo   Transaction information and order lists
 * @returns
 */
export async function StoreNewOrder(
  customerInfo: CustomerInfo,
  transactionInfo: TransactionInfo
) {
  if (!transactionInfo || !customerInfo) {
    console.error("transaction or customer information is NULL");
    return false;
  }
  console.log("customerInfo", customerInfo);
  console.log("transactionInfo", transactionInfo);

  const response = await fetch("/api/transactions", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      customerInfo: customerInfo,
      transactionInfo: transactionInfo,
    }),
  });

  const responseData = await response.json();
  console.log("responseData", responseData);

  if (!response.ok) {
    throw new Error(responseData.errorMessage);
  }

  return responseData;
}
