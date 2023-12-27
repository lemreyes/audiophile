import { CustomerInfo, TransactionInfo } from "../Types/Interfaces";

export async function StoreNewOrder(
  customerInfo: CustomerInfo,
  transactionInfo: TransactionInfo
) {
  if (!transactionInfo || !customerInfo) {
    return false;
  }

  
}
