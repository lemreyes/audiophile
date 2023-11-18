import Image, { StaticImageData } from "next/image";
import shop_arrow from "../../../public/assets/home/arrow_icon.svg";

export default function CategoryCard({
  name,
  image,
}: {
  name: string;
  image: StaticImageData;
}) {
  return (
    <article className="w-full mb-8 ">
      <div className="h-[85px]"></div>
      <div className="bg-product flex flex-col items-center rounded-lg p-8 h-[165px] relative">
        <Image src={image} alt="headphones" className="absolute -top-20 " />
        <h2 className="mt-16 uppercase text-center text-[15px] font-bold mb-4">
          {name}
        </h2>
        <span className="uppercase text-center inline text-textPrimary text-[13px] font-bold">
          Shop <Image src={shop_arrow} alt="arrow icon" className="inline" />
        </span>
      </div>
    </article>
  );
}
