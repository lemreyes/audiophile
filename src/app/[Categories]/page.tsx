export default function Category({
  params,
}: {
  params: { Categories: string };
}) {
  console.log("Categories", params.Categories);
  return (
    <main>
      <section className="bg-black">
        <h1 className="text-white text-3xl tracking-[2px] uppercase font-bold text-center py-8">
          {params.Categories}
        </h1>
      </section>
    </main>
  );
}
