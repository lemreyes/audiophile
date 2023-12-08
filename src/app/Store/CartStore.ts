import { create } from "zustand";

export interface CartState {
  itemCount: number;
  totalPrice: number;
  items: Array<CartItem>;
  addItem: (updatedItemList: CartItem) => void;
  removeAll: () => void;
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
  totalPrice: 0,
  items: [],
  addItem: (cartItem: CartItem) =>
    set((state) => ({
      ...state,
      items: [...state.items, cartItem],
      itemCount: state.itemCount + 1,
      totalPrice: state.totalPrice + cartItem.quantity * cartItem.price,
    })),
  removeAll: () => set({ items: [], itemCount: 0 }),
}));
