import Image from "next/image";
import { useState } from "react";
import CountButton from "../[Categories]/[Product]/Components/CountButton";

export default function CartItem({
  imageSrc,
  productName,
  price,
  quantity,
}: {
  imageSrc: string;
  productName: string;
  price: number;
  quantity: number;
}) {
  const [newQuantity, setNewQuantity] = useState(quantity);

  const numberFormat = new Intl.NumberFormat("en-US");

  return (
    <div className="flex flex-row items-center justify-between mt-4 mb-4">
      <div className="flex flex-row items-center justify-start">
        <Image
          src={imageSrc}
          alt={`${productName}-image`}
          width={64}
          height={64}
        />
        <div className="flex flex-col items-start">
          <span>{productName}</span>
          <span>${numberFormat.format(price)}</span>
        </div>
      </div>
      <div>
        <CountButton quantity={newQuantity} btnHandler={setNewQuantity} />
      </div>
    </div>
  );
}
