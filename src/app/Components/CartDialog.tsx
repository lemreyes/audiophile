"use client";

import { CartState, useCartStore } from "../Store/CartStore";
import CartItem from "./CartItem";

export default function CartDialog({
  hdlClickOutside,
}: {
  hdlClickOutside: () => void;
}) {
  const cartItems = useCartStore((state: CartState) => state.items);
  const cartItemsCount = useCartStore((state: CartState) => state.itemCount);
  const cartItemsRemoveAll = useCartStore(
    (state: CartState) => state.removeAll
  );

  const hdlClickRemoveAll = () => {
    cartItemsRemoveAll();
  };

  return (
    <div
      className="w-screen h-screen overflow-y-hidden bg-black bg-opacity-40 absolute z-50 top-0 left-0 flex flex-col items-center"
      onClick={hdlClickOutside}
    >
      <div
        className="w-11/12 desktop:w-4/5 wide:w-3/5 mt-12 desktop:mt-24 flex flex-col items-end"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white rounded-lg w-full tablet:w-7/12">
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
