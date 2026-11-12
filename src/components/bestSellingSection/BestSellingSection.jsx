import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import SectionHeader from "../sectionHeader/SectionHeader";
import Card from "../card/Card";

function BestSelling() {
  const { products } = useOutletContext();
  const { t } = useTranslation();
  const [isViewAll, setIsViewAll] = useState(false);

  const bestSelling = products.filter((item) => item.class === "bestSelling");
  const allBestselling = products.filter(
    (item) => item.class === "bestSelling" || item.class === "flashSales",
  );
  const viewAllHandler = () => {
    setIsViewAll(true);
    console.log(isViewAll);
  };

  return (
    <section className="mt-[70px]">
      <SectionHeader
        topTitle={t("This Month")}
        bottomTitle={t("Best Selling Products")}
        buttonText={t("View ALL")}
        buttonVarient="primary"
        buttonClickHandler={viewAllHandler}
      />
      <div className="flex gap-[30px] mt-[40px] overflow-scroll scroll-smooth scrollbar-none">
        {isViewAll
          ? allBestselling.map((product) => {
              return <Card key={product.id} product={product} />;
            })
          : bestSelling.map((product) => {
              return <Card key={product.id} product={product} />;
            })}
      </div>
    </section>
  );
}

export default BestSelling;
