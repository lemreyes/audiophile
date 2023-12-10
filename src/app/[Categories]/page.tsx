import prisma from "../Utilities/prismaUtils";
import ProductCard from "./Components/ProductCard";
import Categories from "../Components/Categories";
import ClosingStatement from "../Components/ClosingStatement";

export default async function Category({
  params,
}: {
  params: { Categories: string };
}) {
  let productListingOrder = 0;

  const products = await prisma.product.findMany({
    where: {
      category: params.Categories,
    },
    include: {
      image: true,
    },
  });

  return (
    <main className="flex flex-col items-center">
      <section className="bg-black w-full">
        <h1 className="text-white text-3xl tracking-[2px] uppercase font-bold text-center py-8">
          {params.Categories}
        </h1>
      </section>
      <section className="w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 flex flex-col items-center mb-8">
        {products.map((product) => {
          productListingOrder++;
          return (
            <ProductCard
              key={product.id}
              product={product}
              listOrder={productListingOrder}
            />
          );
        })}
      </section>
      <Categories />
      <ClosingStatement />
    </main>
  );
}
