import { notFound } from "next/navigation";
import prisma from "../../Utilities/prismaUtils";
import AddToCart from "./Components/AddToCart";
import Gallery from "./Components/Gallery";
import Categories from "../../Components/Categories";
import ClosingStatement from "../../Components/ClosingStatement";
import OtherProducts from "./Components/OtherProducts";
import Picture from "../../Components/Picture";
import styles from "./styles.module.css";
import Link from "next/link";

type Props = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ProductDetail(params: Props) {
  const productId = parseInt(params.searchParams.id as string);
  if (productId <= 0) {
    throw new Error("Invalid product Id.");
  }

  const product = await prisma.product.findFirst({
    where: {
      id: productId,
    },
    include: {
      image: true,
      categoryImage: true,
      gallery: {
        orderBy: {
          order: "asc",
        },
      },
      inclusions: true,
      otherProducts: true,
      imageAsOther: true,
    },
  });
  if (!product) {
    notFound();
  }

  const priceFormatOptions = {
    style: "decimal", // Use the decimal style
    minimumFractionDigits: 0, // Do not show any decimal places
    maximumFractionDigits: 0, // Do not show any decimal places
    useGrouping: true, // Enable grouping (commas for thousands)
  };

  return (
    <main className="flex flex-col items-center">
      <Link href={`/${product.category}`} className="w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 mt-4 text-[15px] text-textPrimary font-medium leading-[25px]">
        <span >
          Go Back
        </span>
      </Link>
      <section className="mt-4 flex flex-col tablet:flex-row items-start tablet:items-center w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 tablet:gap-x-12">
        <div className="w-full bg-product flex flex-col items-center">
          <Picture
            srcSet={{
              mobile: product.image[0].mobileSrc,
              tablet: product.image[0].tabletSrc,
              desktop: product.image[0].desktopSrc,
            }}
            alt={product.name}
            styleClass="w-full tablet:w-auto"
          />
        </div>
        <div className="flex flex-col items-start">
          {product.new && (
            <span className="mt-4 uppercase text-left text-accent text-[14px] tracking-[10px]">
              New Product
            </span>
          )}
          <h1 className="mt-8 text-[28px] font-bold tracking-wide uppercase">
            {product.name}
          </h1>
          <p className="mt-4 text-[15px] leading-[25px] font-medium text-left text-textPrimary">
            {product.description}
          </p>
          <span className="my-4 text-[18px] text-left tracking-wider font-bold">
            $ {product.price.toLocaleString("en-US", priceFormatOptions)}
          </span>
          <AddToCart />
        </div>
      </section>
      <section className="mt-16 w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 ">
        <h3 className="text-[24px] tablet:text-[32px] font-bold tracking-wide leading-[32px] uppercase">
          Features
        </h3>
        <p className="mt-4 text-[15px] font-medium leading-[25px] text-textPrimary">
          {product.features}
        </p>
      </section>
      <section className="mt-12 w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 tablet:grid tablet:grid-cols-2">
        <h3 className="text-[24px] tablet:text-[32px] font-bold tracking-wide leading-[36px] uppercase">
          In the box
        </h3>
        <ul className="mt-8 tablet:mt-0">
          {product.inclusions.map((item) => {
            return (
              <li
                key={item.id}
                className="flex flex-row items-center gap-x-8 my-4 text-[15px] font-medium leading-[25px] text-textPrimary"
              >
                <span className="text-accent font-bold">{item.quantity}x</span>
                <span>{item.item}</span>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="mt-12 w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 overflow-hidden">
        <div className={`${styles.gallery_grid}`}>
          <Gallery gallery={product.gallery} />
        </div>
      </section>
      <section className="mt-16 w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 flex flex-col items-center">
        <h3 className="mb-4 text-[24px] tablet:text-[32px] font-bold tracking-wide leading-[36px] text-center uppercase">
          You may also like
        </h3>
        <OtherProducts productList={product.otherProducts} />
      </section>
      <Categories />
      <ClosingStatement />
    </main>
  );
}
