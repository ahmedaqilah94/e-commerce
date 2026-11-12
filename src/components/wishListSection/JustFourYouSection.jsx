import { useOutletContext } from "react-router-dom";
import WishListCard from "./WishListCard";
import { Button } from "../ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function JustFourYouSection() {
  const { t } = useTranslation();
  const [vewAll, setViewAll] = useState(false);
  const { products } = useOutletContext();
  const justFourYouProducts = products.filter((product) => product.justFourYou);
  return (
    <section className="w-full mt-[80px]">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-[16px] ">
          <div className="w-[20px] h-[40px] bg-primary rounded-[4px]"></div>
          <h3 className="text-[20px]">{t("just For You")}</h3>
        </div>
        <Button variant="secondary" onClick={() => setViewAll(!vewAll)}>
          {vewAll ? t("See Less") : t("See All")}
        </Button>
      </header>
      <div className="flex flex-wrap justify-center mt-[60px] gap-[30px]">
        {!vewAll
          ? justFourYouProducts.map((product) => (
              <WishListCard key={product.id} product={product} />
            ))
          : products.map((product) => (
              <WishListCard key={product.id} product={product} />
            ))}
      </div>
    </section>
  );
}

export default JustFourYouSection;
