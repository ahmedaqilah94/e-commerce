import Card from "../card/Card";
import SectionHeader from "../sectionHeader/SectionHeader";

function RelatedProducts({ products, product }) {
  const related = products.filter(
    (item) => item.category === product.category && item.id !== product.id,
  );
  return (
    <section className="mt-[140px]">
      <SectionHeader topTitle="Related Item" />
      <div className="flex gap-[30px] mt-[40px] overflow-x-scroll scroll-smooth scrollbar-none">
        {related.map((product) => (
          <Card product={product} />
        ))}
      </div>
    </section>
  );
}

export default RelatedProducts;
