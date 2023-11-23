export default function Category({ params }: { params: { slug: string } }) {
  console.log("slug", params.slug);
  return (
    <main>
      <section className="bg-black">
        <h1 className="text-white text-3xl tracking-[2px] uppercase font-bold text-center py-8">headphones</h1>
      </section>
    </main>
  );
}
