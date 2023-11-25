import Link from "next/link";
import ImageDynamic from "../Components/ImageDynamic";
import { ProductInfo } from "../Types/Interfaces";

export default function ProductCard({
  product,
  listOrder,
}: {
  product: ProductInfo;
  listOrder: number;
}) {
  const imageSrc = {
    mobile: {
      imageData: product.image[0].mobileSrc,
      width: 220,
      height: 243,
      altText: `${product.name}`,
      styleClasses: "",
    },
    tablet: {
      imageData: product.image[0].tabletSrc,
      width: 220,
      height: 243,
      altText: `${product.name}`,
      styleClasses: "",
    },
    desktop: {
      imageData: product.image[0].desktopSrc,
      width: 349,
      height: 386,
      altText: `${product.name}`,
      styleClasses: "",
    },
  };

  let orderStyle = "";
  if (listOrder % 2 === 0) {
    orderStyle = "deskttop:order-last";
  } else {
    orderStyle = "desktop:order-first";
  }

  return (
    <article
      key={product.id}
      className="flex flex-col desktop:flex-row items-center w-11/12 my-12 desktop:gap-x-12"
    >
      <div
        className={`flex flex-col items-center w-full bg-product ${orderStyle}`}
      >
        <ImageDynamic imageSrc={imageSrc} />
      </div>
      <div className="flex flex-col items-center desktop:items-start">
        {product.new && (
          <span className="my-8 desktop:mt-0 uppercase text-[14px] tracking-[10px] text-accent">
            new product
          </span>
        )}
        <h2 className="uppercase font-bold text-[28px] tracking-[1px] text-center desktop:text-left my-8 desktop:mt-0">
          {product.name}
        </h2>
        <p className="text-center desktop:text-left text-[15px] leading-[25px] text-textPrimary mb-8 font-medium">
          {product.description}
        </p>
        <Link
          href={{
            pathname: `/${product.category}/${product.slug}`,
            query: { id: product.id },
          }}
        >
          <button className="px-8 py-4 uppercase bg-accent hover:bg-accentHover text-white text-[13px] tracking-[1px] font-bold">
            See Product
          </button>
        </Link>
      </div>
    </article>
  );
}
