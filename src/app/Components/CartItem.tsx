import Image from "next/image";
import { SetStateAction, useState } from "react";
import CountButton from "../[Categories]/[Product]/Components/CountButton";

export default function CartItem({
  imageSrc,
  productName,
  price,
}: {
  imageSrc: string;
  productName: string;
  price: number;
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Image
        src={imageSrc}
        alt={`${productName}-image`}
        width={64}
        height={64}
      />
      <div>
        <span>{productName}</span>
        <span>{price}</span>
      </div>
      <div>
        <CountButton quantity={quantity} btnHandler={setQuantity} />
      </div>
    </div>
  );
}
