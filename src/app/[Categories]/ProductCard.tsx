import ImageDynamic from "../Components/ImageDynamic";
import { ProductInfo } from "../Types/Interfaces";

export default function ProductCard({ product }: { product: ProductInfo }) {
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
  return (
    <article
      key={product.id}
      className="flex flex-col items-center w-4/5 my-12"
    >
      <div className="flex flex-col items-center w-full bg-product">
        <ImageDynamic imageSrc={imageSrc} />
      </div>
      {product.new && (
        <span className="my-8 uppercase text-[14px] tracking-[10px] text-accent">
          new product
        </span>
      )}
      <h2 className="uppercase font-bold text-[28px] tracking-[1px] text-center mb-8">
        {product.name}
      </h2>
      <p className="text-center text-[15px] leading-[25px] text-textPrimary mb-8 font-medium">
        {product.description}
      </p>
      <button className="px-8 py-4 uppercase bg-accent hover:bg-accentHover text-white text-[13px] tracking-[1px] font-bold">
        See Product
      </button>
    </article>
  );
}
