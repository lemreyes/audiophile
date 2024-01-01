import Image from "next/image";
import { useState } from "react";
import CountButton from "../[Categories]/[Product]/Components/CountButton";
import { CartState, ICartItem, useCartStore } from "../Store/CartStore";

export default function CartItem({
  id,
  imageSrc,
  productName,
  price,
  quantity,
}: {
  id: number;
  imageSrc: string;
  productName: string;
  price: number;
  quantity: number;
}) {
  const [newQuantity, setNewQuantity] = useState(quantity);
  const numberFormat = new Intl.NumberFormat("en-US");

  const incrementCartItem = useCartStore(
    (state: CartState) => state.incrementItem
  );

  const decrementCartitem = useCartStore(
    (state: CartState) => state.decrementItem
  );

  const hdlIncrement = () => {
    setNewQuantity(newQuantity + 1);

    const cartItem: ICartItem = {
      productId: id,
      productName: productName,
      price: price,
      quantity: newQuantity,
      imageSrc: imageSrc,
    };

    incrementCartItem(cartItem);
  };
  const hdlDecrement = () => {
    setNewQuantity(newQuantity - 1);

    const cartItem: ICartItem = {
      productId: id,
      productName: productName,
      price: price,
      quantity: newQuantity,
      imageSrc: imageSrc,
    };

    decrementCartitem(cartItem);
  };

  return (
    <div className="flex flex-row items-center justify-between mt-4 mb-4">
      <div className="flex flex-row items-center justify-start">
        <Image
          src={imageSrc}
          alt={`${productName}-image`}
          width={64}
          height={64}
        />
        <div className="flex flex-col items-start ml-4">
          <span className="text-[15px] font-bold leading-[25px]">
            {productName}
          </span>
          <span className="text-[14px] text-gray-400 font-bold leading-[25px]">
            ${numberFormat.format(price)}
          </span>
        </div>
      </div>
      <div>
        <CountButton
          quantity={newQuantity}
          hdlIncrement={hdlIncrement}
          hdlDecrement={hdlDecrement}
        />
      </div>
    </div>
  );
}
