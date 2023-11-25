import { notFound } from "next/navigation";
import prisma from "../../Utilities/prismaUtils";

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
      gallery: true,
      inclusions: true,
      otherProducts: true,
      imageAsOther: true,
    },
  });
  if (!product) {
    notFound();
  }

  return <main>Product Detail</main>;
}
