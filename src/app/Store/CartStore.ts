import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import CartItem from "../Components/CartItem";

export interface CartState {
  itemCount: number;
  totalPrice: number;
  items: Array<CartItem>;
  addCartItem: (item: CartItem) => void;
  decrementItem: (item: CartItem) => void;
  deleteItem: (item: CartItem) => void;
  removeAll: () => void;
}

export interface CartItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  imageSrc: string;
}

export const useCartStore = create<CartState>()(
  immer((set) => ({
    itemCount: 0,
    totalPrice: 0,
    items: [],
    addCartItem: (item: CartItem) => {
      set((state) => {
        const existingItem = state.items.find(
          (stateItem) => stateItem.productId === item.productId
        );

        if (!existingItem) {
          return {
            ...state,
            items: [...state.items, item],
            itemCount: state.itemCount + 1,
            totalPrice: state.totalPrice + item.quantity * item.price,
          };
        }

        existingItem.quantity = existingItem.quantity + item.quantity;

        return {
          ...state,
          totalPrice: state.totalPrice + item.quantity * item.price,
        };
      });
    },
    decrementItem: (item: CartItem) => {},
    deleteItem: (item: CartItem) => {},
    removeAll: () => set({ items: [], itemCount: 0 }),
  }))
);
