import { useRef, useState } from "react";
import SectionHeader from "../sectionHeader/SectionHeader";
import Card from "../card/Card";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";

function OurProductsSection() {
  const { products } = useOutletContext();
  const [isViewAll, setIsViewAll] = useState(false);
  const { t } = useTranslation();

  const scrollContainer = useRef(null);

  const ourProducts = products.filter((item) => item.class === "ourProducts");

  const handleScroll = (direction) => {
    const container = scrollContainer.current;
    if (container) {
      const scrollAmount = 200;

      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }
    }
  };
  return (
    <section className="w-full mt-[71px]">
      <SectionHeader
        topTitle={"Our Products"}
        bottomTitle={"Explore Our Products"}
        arows={!isViewAll}
        onLeftClick={() => handleScroll("left")}
        onRightClick={() => handleScroll("right")}
      />
      <div
        ref={scrollContainer}
        className={`flex flex-wrap justify-center mt-[60px] gap-[30px] overflow-x-auto scroll-smooth scrollbar-none ${isViewAll && ""}`}
      >
        {isViewAll
          ? products.map((product) => (
              <Card key={product.id} product={product} />
            ))
          : ourProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
      </div>
      <div className="flex justify-center mt-[60px]">
        <Button
          className={`${isViewAll ? "hidden" : "block"}`}
          onClick={() => setIsViewAll(true)}
        >
          {t("View All Products")}
        </Button>
        <Button
          className={`${!isViewAll ? "hidden" : "block"}`}
          onClick={() => setIsViewAll(false)}
        >
          {t("Show less")}
        </Button>
      </div>
    </section>
  );
}

export default OurProductsSection;
