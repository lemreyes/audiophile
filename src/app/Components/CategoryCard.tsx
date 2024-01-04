import Image from "next/image";
import shop_arrow from "../../../public/assets/home/arrow_icon.svg";
import Picture from "./Picture";
import Link from "next/link";

export default function CategoryCard({
  name,
  image,
}: {
  name: string;
  image: any;
}) {
  return (
    <article className="w-full mb-8 ">
      <div className="h-[85px]"></div>
      <div className="bg-product flex flex-col items-center rounded-lg p-8 h-[165px] relative">
        <Picture
          srcSet={{
            mobile: image.mobile,
            tablet: image.tablet,
            desktop: image.desktop,
          }}
          alt={"zx9-speaker"}
          styleClass={"absolute -top-20 -translate-x-1/2"}
        />
        <h2 className="mt-16 uppercase text-center text-[15px] font-bold mb-4">
          {name}
        </h2>
        <span className="uppercase text-center text-textPrimary text-[13px] font-bold hover:text-accent flex flex-row items-center gap-2">
          <Link href={`/${name}`}>
            <span className="sr-only">Shop for {name}</span>Shop
          </Link>
          <Image src={shop_arrow} alt="arrow icon" className="inline" />
        </span>
      </div>
    </article>
  );
}
