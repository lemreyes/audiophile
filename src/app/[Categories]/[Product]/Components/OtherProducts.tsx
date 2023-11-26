import ImageDynamic, { ImageSrcObject } from "../../../Components/ImageDynamic";
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
  imageSrc: ImageSrcObject;
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

    const imageSrc = {
      mobile: {
        imageData: product.image[0].mobileSrc,
        width: 327,
        height: 120,
        altText: `${product.name}`,
        styleClasses: "",
      },
      tablet: {
        imageData: product.image[0].tabletSrc,
        width: 223,
        height: 471,
        altText: `${product.name}`,
        styleClasses: "",
      },
      desktop: {
        imageData: product.image[0].desktopSrc,
        width: 350,
        height: 318,
        altText: `${product.name}`,
        styleClasses: "",
      },
    };

    const productDisplayInfo: OtherProductDisplayInfo = {
      id: product.id,
      name: product.name,
      imageSrc: imageSrc,
    };

    otherProductDisplayInfoArray.push(productDisplayInfo);
  }

  return (
    <div>
      {otherProductDisplayInfoArray.map((otherProduct) => {
        return (
          <div key={otherProduct.id} className="flex flex-col items-center">
            <ImageDynamic imageSrc={otherProduct.imageSrc} />
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
