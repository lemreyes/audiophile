import { create } from "zustand";

export interface CartState {
  itemCount: number;
  items: Array<CartItem>;
  addItem: (updatedItemList: CartItem) => void;
}

export interface CartItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  imageSrc: string;
}

export const useCartStore = create<CartState>()((set) => ({
  itemCount: 0,
  items: [],
  addItem: (cartItem: CartItem) =>
    set((state) => ({
      ...state,
      items: [...state.items, cartItem],
      itemCount: state.itemCount + 1,
    })),
}));
