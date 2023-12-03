import { create } from "zustand";

interface CartState {
  itemCount: number;
  items: Array<CartItemList>;
  addItem: (updatedItemList: Array<CartItemList>) => void;
}

export interface CartItemList {
  productId: number;
  productName: string;
  quantity: number;
  imageSrc: string;
}

export const useCartStore = create<CartState>()((set) => ({
  itemCount: 0,
  items: [],
  addItem: (updatedItemList: Array<CartItemList>) =>
    set({
      items: updatedItemList,
    }),
}));
