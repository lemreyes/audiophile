import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";

export interface CartState {
  itemCount: number;
  totalPrice: number;
  items: Array<ICartItem>;
  addCartItem: (item: ICartItem) => void;
  incrementItem: (item: ICartItem) => void;
  decrementItem: (item: ICartItem) => void;
  removeAll: () => void;
}

export interface ICartItem {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
  imageSrc: string;
}

export const useCartStore = create<CartState>()(
  immer(
    persist(
      (set) => ({
        itemCount: 0,
        totalPrice: 0,
        items: [],
        addCartItem: (item: ICartItem) => {
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
            state.totalPrice = state.totalPrice + item.quantity * item.price;
          });
        },
        incrementItem: (item: ICartItem) => {
          set((state) => {
            const existingItem = state.items.find(
              (stateItem) => stateItem.productId === item.productId
            );

            if (!existingItem) {
              throw new Error("Item does not exist");
            }

            existingItem.quantity++;
            state.totalPrice = state.totalPrice + item.price;
          });
        },
        decrementItem: (item: ICartItem) => {
          set((state) => {
            const existingItem = state.items.find(
              (stateItem) => stateItem.productId === item.productId
            );

            if (!existingItem) {
              throw new Error("Item does not exist");
            }

            existingItem.quantity--;
            state.totalPrice = state.totalPrice - item.price;

            if (existingItem.quantity === 0) {
              state.itemCount--;

              const newItemArray = state.items.filter((stateItem) => {
                return stateItem.productId !== item.productId;
              });

              state.items = newItemArray;
            }
          });
        },
        removeAll: () => set({ items: [], itemCount: 0, totalPrice: 0 }),
      }),
      {
        name: "audiophile-storage",
      }
    )
  )
);
