import prisma from "../Utilities/prismaUtils";
import ImageDynamic from "../Components/ImageDynamic";
import ProductCard from "./ProductCard";
import Categories from "../Components/Categories";
import ClosingStatement from "../Components/ClosingStatement";

export default async function Category({
  params,
}: {
  params: { Categories: string };
}) {
  console.log("Categories", params.Categories);

  const products = await prisma.product.findMany({
    where: {
      category: params.Categories.toLowerCase(),
    },
    include: {
      image: true,
    },
  });

  return (
    <main className="">
      <section className="bg-black">
        <h1 className="text-white text-3xl tracking-[2px] uppercase font-bold text-center py-8">
          {params.Categories}
        </h1>
      </section>
      <section className="flex flex-col items-center mb-8">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </section>
      <Categories />
      <ClosingStatement />
    </main>
  );
}
