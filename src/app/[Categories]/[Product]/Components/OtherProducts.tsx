import ImageDynamic from "../../../Components/ImageDynamic";
import prisma from "../../../Utilities/prismaUtils";

export interface OtherProductsInfo {
  id: number;
  parentProductId: number;
  productId: number;
  created_at: Date;
  updated_at: Date;
}

export default async function OtherProducts({
  productList,
}: {
  productList: Array<OtherProductsInfo>;
}) {
  return (
    <div>
      {productList.map(async (otherProductInfo) => {
        const product = await prisma.product.findUnique({
          where: {
            id: otherProductInfo.productId,
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
        
        return (
          <div key={product.id} className="flex flex-col items-center">
            <ImageDynamic imageSrc={imageSrc} />
            <h4 className="mt-4 text-[24px] font-bold] text-center tracking-wide">
              {product.name}
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
