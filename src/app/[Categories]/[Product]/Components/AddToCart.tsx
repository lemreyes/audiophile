"use client";
import { useState } from "react";
import CountButton from "./CountButton";
import { CartState, CartItem, useCartStore } from "../../../Store/CartStore";

export default function AddToCart({
  id,
  name,
  price,
  srcPath,
}: {
  id: number;
  name: string;
  price: number;
  srcPath: string;
}) {
  const [quantity, setQuantity] = useState(1);
  const addItemToCart = useCartStore((state: CartState) => state.addItem);

  // create the CartItem object
  const cartItem: CartItem = {
    productId: id,
    productName: name,
    price: price,
    quantity: quantity,
    imageSrc: srcPath,
  };

  const hdlClickAddToCart = () => {
    addItemToCart(cartItem);
  };

  return (
    <div className="flex flex-row items-center gap-x-4">
      <div className="flex flex-row items-center">
        <CountButton quantity={quantity} btnHandler={setQuantity} />
      </div>
      <button
        className="py-4 px-8 uppercase text-[13px] font-bold tracking-wide text-white bg-accent 
                        hover:bg-accentHover"
        onClick={hdlClickAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
}
