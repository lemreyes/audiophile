import Link from "next/link";
import Picture, { srcSetInfo } from "../../../Components/Picture";
import prisma from "../../../Utilities/prismaUtils";

export interface OtherProductsInfo {
  id: number;
  parentProductId: number;
  productId: number;
  created_at: Date;
  updated_at: Date;
}

interface OtherProductDisplayInfo {
  id: number;
  name: string;
  category: string;
  imageSrcSetInfo: srcSetInfo;
}

export default async function OtherProducts({
  productList,
}: {
  productList: Array<OtherProductsInfo>;
}) {
  let otherProductDisplayInfoArray: Array<OtherProductDisplayInfo> = [];

  for (const otherProduct of productList) {
    // get product detail
    const product = await prisma.product.findUnique({
      where: {
        id: otherProduct.productId,
      },
      include: {
        image: true,
      },
    });

    if (!product) {
      throw new Error("Product information not found.");
    }

    const imageInfo = {
      imageSrc: {
        mobile: product.image[0].mobileSrc,
        tablet: product.image[0].tabletSrc,
        desktop: product.image[0].desktopSrc,
      },
      alt: product.name,
      styleClasses: "max-w-[200px]",
    };

    const productDisplayInfo: OtherProductDisplayInfo = {
      id: product.id,
      name: product.name,
      category: product.category,
      imageSrcSetInfo: imageInfo,
    };

    otherProductDisplayInfoArray.push(productDisplayInfo);
  }

  return (
    <div className="flex flex-col items-center gap-y-4 tablet:mt-8 tablet:grid tablet:grid-cols-3 tablet:gap-x-4 tablet:gap-y-0 w-full">
      {otherProductDisplayInfoArray.map((otherProduct) => {
        return (
          <div
            key={otherProduct.id}
            className="flex flex-col items-center justify-between w-full h-full"
          >
            <div className="px-2 bg-product rounded-lg w-full flex items-center justify-center">
              <Picture
                srcSet={{
                  mobile: otherProduct.imageSrcSetInfo.imageSrc.mobile,
                  tablet: otherProduct.imageSrcSetInfo.imageSrc.tablet,
                  desktop: otherProduct.imageSrcSetInfo.imageSrc.desktop,
                }}
                alt={otherProduct.imageSrcSetInfo.alt}
                styleClass={otherProduct.imageSrcSetInfo.styleClasses}
              />
            </div>

            <h4 className="mt-4 text-[24px] px-4 font-bold text-center tracking-wide">
              {otherProduct.name}
            </h4>
            <Link
              href={{
                pathname: `/${otherProduct.category}/${otherProduct.name}`,
                query: { id: otherProduct.id },
              }}
            >
              <button
                className="mt-4 mb-8 py-4 px-8 uppercase text-[13px] font-bold tracking-wide text-white bg-accent 
                          hover:bg-accentHover"
              >
                See product
              </button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
