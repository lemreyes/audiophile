import Link from "next/link";
import { ProductInfo } from "../../Types/Interfaces";
import Picture from "../../Components/Picture";

export default function ProductCard({
  product,
  listOrder,
}: {
  product: ProductInfo;
  listOrder: number;
}) {
  let orderStyle = "";
  if (listOrder % 2 === 0) {
    orderStyle = "desktop:order-last";
  } else {
    orderStyle = "desktop:order-first";
  }

  return (
    <article
      key={product.id}
      className="flex flex-col desktop:grid desktop:grid-cols-2 items-center my-12 desktop:gap-x-12"
    >
      <div
        className={`flex flex-col items-center tablet:w-full bg-product ${orderStyle}`}
      >
        <Picture
          srcSet={{
            mobile: product.image[0].mobileSrc,
            tablet: product.image[0].tabletSrc,
            desktop: product.image[0].desktopSrc,
          }}
          alt={product.name}
          styleClass="w-auto tablet:h-[352px] desktop:h-auto"
        />
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
        <p className="mb-8 tablet:px-12 desktop:px-0 text-center desktop:text-left text-[15px] leading-[25px] text-textPrimary font-medium">
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
