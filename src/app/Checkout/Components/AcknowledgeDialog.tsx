import Image from "next/image";
import check_icon from "../../../../public/assets/checkout/icon-order-confirmation.svg";
import { CartState, ICartItem, useCartStore } from "../../Store/CartStore";
import { useEffect, useState } from "react";
import SummaryItem from "./SummaryItem";
import { useRouter } from "next/navigation";

export default function AcknowledgeDialog({
  hdlClickOutside,
}: {
  hdlClickOutside: (e: React.MouseEvent) => void;
}) {
  const cartItems = useCartStore((state: CartState) => state.items);
  const cartItemsCount = useCartStore((state: CartState) => state.itemCount);
  const totalPrice = useCartStore((state: CartState) => state.totalPrice);

  const [singleCartItem, setSingleCartItem] = useState<ICartItem | undefined>(
    undefined
  );

  const router = useRouter();
  const numberFormat = new Intl.NumberFormat("en-US");

  // need to use useEffect since data of cartItems is from localStorage
  useEffect(() => {
    setSingleCartItem(cartItems[0]);
  }, [cartItems]);

  return (
    <div
      id="ack-overlay"
      className="w-screen h-screen overflow-y-hidden bg-black bg-opacity-40 fixed z-50 top-0 left-0 flex flex-col items-center"
      onClick={hdlClickOutside}
    >
      <div className="w-11/12 desktop:w-4/5 wide:w-3/5 mt-12 desktop:mt-56 p-8 rounded-lg bg-white flex flex-col items-start">
        <Image src={check_icon} alt="Check icon" />
        <h1 className="mt-4 text-[24px] font-bold uppercase tracking-tight leading-[28px]">
          Thank you for your order
        </h1>
        <p className="mt-4 text-[15px] font-medium leading-[25px] text-gray-400">
          You will receive an email confirmation shortly.
        </p>
        <div className="mt-4 w-full flex flex-col tablet:flex-row">
          <div className="bg-product p-4 rounded-t-xl tablet:rounded-none tablet:rounded-l-xl tablet:w-7/12">
            <div className="">
              {singleCartItem && (
                <SummaryItem
                  id={singleCartItem.productId}
                  imageSrc={singleCartItem.imageSrc}
                  productName={singleCartItem.productName}
                  price={singleCartItem.price}
                  quantity={singleCartItem.quantity}
                />
              )}
            </div>
            <hr />
            <div className="mt-4">
              <p className="text-[12px] font-bold text-gray-600 text-center">
                and {cartItemsCount - 1} other item(s)
              </p>
            </div>
          </div>
          <div className="bg-black p-4 rounded-b-xl tablet:rounded-none tablet:rounded-r-xl tablet:w-5/12">
            <span className="text-gray-400 text-[15px] font-medium leading-6 uppercase">
              Grand Total
            </span>
            <span className="block mt-4 text-white text-[18px] font-bold">
              $ {numberFormat.format(totalPrice)}
            </span>
          </div>
        </div>
        <button
          className="w-full mt-8 py-4 uppercase text-white text-[13px] font-bold tracking-[1px] bg-accent hover:bg-accentHover
                          disabled:bg-gray-400"
          onClick={() => router.push("/")}
        >
          Back to home
        </button>
      </div>
    </div>
  );
}
