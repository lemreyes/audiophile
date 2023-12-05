"use client";

import { CartState, useCartStore } from "../Store/CartStore";
import Image from "next/image";
import CountButton from "../[Categories]/[Product]/Components/CountButton";
import { SetStateAction } from "react";
import CartItem from "./CartItem";

export default function CartDialog({
  hdlClickOutside,
}: {
  hdlClickOutside: () => void;
}) {
  const cartItems = useCartStore((state: CartState) => state.items);
  const cartItemsCount = useCartStore((state: CartState) => state.itemCount);

  return (
    <div
      className="w-screen h-screen overflow-y-hidden bg-black bg-opacity-40 absolute z-50 top-0 left-0 flex flex-col items-center"
      onClick={hdlClickOutside}
    >
      <div className="w-11/12 desktop:w-4/5 wide:w-3/5 mt-12 desktop:mt-24 flex flex-col items-end">
        <div className="bg-white rounded-lg w-full tablet:w-7/12">
          <h3 className="tracking-wider text-[18px] font-bold">
            Cart ({cartItemsCount})
          </h3>
          <div>
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.productId}
                  imageSrc={item.imageSrc}
                  productName={item.productName}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
