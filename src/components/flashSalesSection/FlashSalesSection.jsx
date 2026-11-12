import SectionHeader from "../sectionHeader/SectionHeader";
import Card from "../card/Card";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useOutletContext } from "react-router-dom";

function FlashSales() {
  const { products } = useOutletContext();
  const { t } = useTranslation();
  const [isViewAll, setIsViewAll] = useState(false);
  const scrollContainer = useRef(null);

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
  const flashSaleFiltered = products.filter(
    (item) => item.class === "flashSales",
  );
  return (
    <section className="mt-[140px] pb-[60px] border-b" id="flashSales">
      <SectionHeader
        topTitle={t("Today’s")}
        bottomTitle={t("Flash Sales")}
        hasCountDown
        arows={!isViewAll}
        onLeftClick={() => handleScroll("left")}
        onRightClick={() => handleScroll("right")}
      />
      <div
        ref={scrollContainer}
        className={`flex gap-[30px] mt-[40px] overflow-x-scroll scroll-smooth scrollbar-none ${isViewAll && "flex-wrap justify-center"}`}
      >
        {isViewAll
          ? products.map((product) => {
              return <Card key={product.id} product={product} />;
            })
          : flashSaleFiltered.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
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

export default FlashSales;
