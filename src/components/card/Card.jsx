import { Eye, Heart } from "lucide-react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { updateProduct } from "@/data";
import { Link, useOutletContext } from "react-router-dom";
import StarRating from "./StarRating";
import SelectColor from "./SelectColor";
import { useState } from "react";
import ModalMessage from "./ModalMessage";

function Card({ product, propsSetProducts, propsLoggedUser }) {
  const context = useOutletContext();
  const [selectedColor, setSelectedColor] = useState(product.color1);

  const setProducts =
    propsSetProducts || (context ? context.setProducts : null);
  const loggedUser = propsLoggedUser || (context ? context.loggedUser : null);
  const { t } = useTranslation();

  const [modalData, setModalData] = useState({
    isOpen: false,
    message: "",
  });

  const toggleAddToFavorite = () => {
    if (loggedUser?.isLogin === true) {
      updateProduct(product.id, setProducts, {
        isFavorite: !product.isFavorite,
      });
    } else {
      setModalData({
        isOpen: true,
        message: t("You must login"),
      });
    }
  };
  const toggleAddToCart = () => {
    if (loggedUser?.isLogin === true) {
      if (product.inCart > 0) {
        updateProduct(product.id, setProducts, {
          inCart: 0,
        });
      } else {
        updateProduct(product.id, setProducts, {
          inCart: 1,
        });
      }
    } else {
      setModalData({
        isOpen: true,
        message: t("You must login"),
      });
    }
  };

  return (
    <div className="group" tabIndex={0}>
      <div className="relative w-67.5 h-62.5 bg-secondary p-3 rounded-lg flex justify-between">
        {product.discountPercentage ? (
          <h3 className="bg-primary text-primary-foreground px-3 py-1 h-6.5 rounded-[4px] text-[12px] font-poppins">
            {product.discountPercentage} %
          </h3>
        ) : (
          <div></div>
        )}
        <div className="flex flex-col">
          <Button
            className={`bg-background text-foreground ${product.isFavorite && "bg-primary text-primary-foreground"}`}
            size="icon-sm"
            onClick={toggleAddToFavorite}
          >
            <Heart className={"stroke-[1.5px]"} />
          </Button>
          <Button className={"bg-background text-foreground"} size="icon-sm">
            <Link to={`/product/${product.id}`}>
              <Eye className="stroke-[1.5px]" />
            </Link>
          </Button>
        </div>
        <img
          src={
            selectedColor === product.color1 ? product.image : product.image2
          }
          alt={product.name}
          className="absolute inset-0 m-auto"
        />
        <button
          className={
            "bg-accent text-accent-foreground absolute inset-0 mt-auto  h-[41px] w-[270px] rounded-b-[4px] cursor-pointer hidden group-hover:block group-focus:block"
          }
          onClick={toggleAddToCart}
        >
          {product.inCart === 0 ? t("Add To Cart") : t("Remove from Cart")}
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h2 className="font-medium">{product.name}</h2>
        <div
          className={`${product.class === "ourProducts" && " flex gap-[8px]"}`}
        >
          <h3 className="text-primary flex gap-3 font-medium ">
            ${product.currentPrice}
            {product.originalPrice && (
              <span className="text-muted-foreground line-through ">
                ${product.originalPrice}
              </span>
            )}
          </h3>
          <div className="flex gap-2">
            <StarRating
              product={product}
              setProducts={setProducts}
              loggedUser={loggedUser}
            />
            <span className="text-muted-foreground font-semibold">
              ({product.reviewsCount})
            </span>
          </div>
        </div>

        <SelectColor
          product={product}
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </div>
      <ModalMessage
        isOpen={modalData.isOpen}
        message={modalData.message}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
      />
    </div>
  );
}

export default Card;
