"use client";

import { CartState, useCartStore } from "../Store/CartStore";
import CartItem from "./CartItem";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CartDialog({
  hdlClickOutside,
  hdlProceedCheckout,
}: {
  hdlClickOutside: (e: React.MouseEvent) => void;
  hdlProceedCheckout: (e: React.MouseEvent) => void;
}) {
  const cartItems = useCartStore((state: CartState) => state.items);
  const cartItemsCount = useCartStore((state: CartState) => state.itemCount);
  const cartItemsTotalPrice = useCartStore(
    (state: CartState) => state.totalPrice
  );
  const [disableCheckout, setDisableCheckout] = useState(true);

  const router = useRouter();

  let numberFormat = new Intl.NumberFormat("en-US");

  const cartItemsRemoveAll = useCartStore(
    (state: CartState) => state.removeAll
  );

  useEffect(() => {
    if (cartItemsTotalPrice === 0) {
      setDisableCheckout(true);
    } else {
      setDisableCheckout(false);
    }
  }, [cartItemsTotalPrice]);

  const hdlClickRemoveAll = () => {
    cartItemsRemoveAll();
  };

  return (
    <div
      id="overlay"
      className="w-screen h-screen overflow-y-hidden bg-black bg-opacity-40 absolute z-50 top-0 left-0 flex flex-col items-center"
      onClick={hdlClickOutside}
    >
      <div className="w-11/12 desktop:w-4/5 wide:w-3/5 mt-12 desktop:mt-24 flex flex-col items-end">
        <div className="bg-white rounded-lg w-full tablet:w-7/12 p-8">
          <div className="flex flex-row items-center justify-between">
            <h3 className="tracking-wider text-[18px] font-bold">
              Cart ({cartItemsCount})
            </h3>
            <button
              className="font-medium text-[15px] leading=[25px] text-gray-400 underline
                                hover:text-accent"
              onClick={hdlClickRemoveAll}
            >
              Remove all
            </button>
          </div>

          <div>
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.productId}
                  id={item.productId}
                  imageSrc={item.imageSrc}
                  productName={item.productName}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })}
          </div>
          <div className="mt-4 flex flex-row items-center justify-between">
            <span className="text-[15px] text-gray-400 leading-[25px] font-medium uppercase">
              Total
            </span>
            <span className="text-[18px] font-bold">
              ${numberFormat.format(cartItemsTotalPrice)}
            </span>
          </div>
          <button
            className="w-full mt-8 py-4 uppercase text-white text-[13px] font-bold tracking-[1px] bg-accent hover:bg-accentHover
                          disabled:bg-gray-400"
            disabled={disableCheckout}
            onClick={(e) => {
              router.push("/Checkout");
              hdlProceedCheckout(e);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
