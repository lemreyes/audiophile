import { srcSetInfo } from "../../../Components/Picture";
import prisma from "../../../Utilities/prismaUtils";
import OtherProductCard from "./OtherProductCard";
import {
  ImageInfoPictureComponent,
  ImageSource,
} from "../../../Types/Interfaces";

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
  shortName: string;
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

    const imageInfo: ImageInfoPictureComponent = {
      imageSrc: {
        mobile: product.image[0].mobileSrc,
        tablet: product.image[0].tabletSrc,
        desktop: product.image[0].desktopSrc,
      } as ImageSource,
      alt: product.name,
      styleClasses: "max-w-[200px]",
    };

    const productDisplayInfo: OtherProductDisplayInfo = {
      id: product.id,
      name: product.name,
      shortName: product.shortName,
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
            <OtherProductCard
              imageSrcSetInfo={otherProduct.imageSrcSetInfo}
              shortName={otherProduct.shortName}
              name={otherProduct.name}
              category={otherProduct.category}
              id={otherProduct.id}
            />
          </div>
        );
      })}
    </div>
  );
}
