export const SHIPPING_FEE: number = 50;
export const VAT_RATE: number = 0.2;

export function calculateVAT(total: number) {
  return total * VAT_RATE;
}

export function calculateGrandTotal(total: number) {
  return total + SHIPPING_FEE;
}
