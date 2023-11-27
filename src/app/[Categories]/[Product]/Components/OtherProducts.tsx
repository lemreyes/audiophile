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
      styleClasses: "",
    };

    const productDisplayInfo: OtherProductDisplayInfo = {
      id: product.id,
      name: product.name,
      imageSrcSetInfo: imageInfo,
    };

    otherProductDisplayInfoArray.push(productDisplayInfo);
  }

  return (
    <div>
      {otherProductDisplayInfoArray.map((otherProduct) => {
        return (
          <div key={otherProduct.id} className="flex flex-col items-center">
            <Picture
              srcSet={{
                mobile: otherProduct.imageSrcSetInfo.imageSrc.mobile,
                tablet: otherProduct.imageSrcSetInfo.imageSrc.tablet,
                desktop: otherProduct.imageSrcSetInfo.imageSrc.desktop,
              }}
              alt={otherProduct.imageSrcSetInfo.alt}
              styleClass={otherProduct.imageSrcSetInfo.styleClasses}
            />

            <h4 className="mt-4 text-[24px] font-bold] text-center tracking-wide">
              {otherProduct.name}
            </h4>
            <button
              className="mt-4 mb-8 py-4 px-8 uppercase text-[13px] font-bold tracking-wide text-white bg-accent 
                          hover:bg-accentHover"
            >
              See product
            </button>
          </div>
        );
      })}
    </div>
  );
}
