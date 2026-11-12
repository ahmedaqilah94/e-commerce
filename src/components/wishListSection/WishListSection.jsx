import { useOutletContext } from "react-router-dom";
import { Button } from "../ui/button";
import { updateProduct } from "@/data";
import WishListCard from "./WishListCard";
import { useTranslation } from "react-i18next";

function WishListSection() {
  const { products, setProducts } = useOutletContext();
  const { t } = useTranslation();
  const wishListProducts = products.filter((item) => item.isFavorite);
  const addAllToBag = () => {
    wishListProducts.forEach((product) => {
      updateProduct(product.id, setProducts, { inCart: 1 });
    });
  };
  return (
    <section className="w-full mt-[80px]">
      <header className="flex justify-between items-center">
        <h3>{t("Wishlist (4)")}</h3>
        <Button variant="secondary" onClick={addAllToBag}>
          {t("Move All To Bag")}
        </Button>
      </header>
      <div className="flex flex-wrap justify-center mt-[60px] gap-[30px]">
        {wishListProducts.length ? (
          wishListProducts.map((product) => (
            <WishListCard key={product.id} product={product} />
          ))
        ) : (
          <h1 className="text-center text-3xl bg-muted text-muted-foreground rounded-2xl  leading-30 w-full">
            {t("Your wishlist is empty")}
          </h1>
        )}
      </div>
    </section>
  );
}

export default WishListSection;
