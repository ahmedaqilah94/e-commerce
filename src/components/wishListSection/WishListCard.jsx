import { Eye, ShoppingCart, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { updateProduct } from "@/data";
import { Link, useOutletContext } from "react-router-dom";

function WishListCard({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.color1);
  const { setProducts } = useOutletContext();

  const { t } = useTranslation();

  const deleteHandler = () => {
    updateProduct(product.id, setProducts, {
      isFavorite: false,
    });
  };
  const toggleAddToCart = () => {
    updateProduct(product.id, setProducts, {
      inCart: !product.inCart,
    });
  };

  return (
    <div className="group" tabIndex={0}>
      <div className="relative w-67.5 h-62.5 bg-secondary p-3 rounded-lg flex justify-between">
        <div className="flex flex-col gap-2">
          {product.discountPercentage && (
            <h3 className="bg-primary text-primary-foreground px-3 py-1 h-6.5 rounded-[4px] text-[12px] font-poppins">
              {product.discountPercentage} %
            </h3>
          )}
          {product.new && (
            <h3 className="bg-[#00FF66] text-primary-foreground px-3 py-1 h-6.5 rounded-[4px] text-[12px] text-center font-poppins">
              {t("NEW")}
            </h3>
          )}
        </div>
        <div className="flex flex-col">
          {product.isFavorite ? (
            <Button
              className="bg-background text-foreground"
              size="icon-sm"
              onClick={deleteHandler}
            >
              <Trash className="stroke-[1.5px]" size={2} />
            </Button>
          ) : null}
          {product.justFourYou && (
            <Button className={"bg-background text-foreground"} size="icon-sm">
              <Link to={`/product/${product.id}`}>
                <Eye className="stroke-[1.5px]" />
              </Link>
            </Button>
          )}
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
            "bg-accent text-accent-foreground absolute inset-0 mt-auto  h-[41px] w-[270px] rounded-b-[4px] cursor-pointer flex items-center justify-center gap-2"
          }
          onClick={toggleAddToCart}
        >
          <ShoppingCart className="stroke-[1.5px]" />
          {!product.inCart ? t("Add To Cart") : t("Remove From Cart")}
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h2 className="font-medium">{product.name}</h2>
        <div className="flex items-center justify-between">
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
          </div>

          {product.color1 && (
            <div className="flex gap-[8px]">
              <label className="relative cursor-pointer">
                <input
                  type="radio"
                  name={product.name}
                  value={product.color1}
                  className="peer sr-only"
                  checked={selectedColor === product.color1}
                  onChange={() => setSelectedColor(product.color1)}
                />
                <span
                  className={`block h-6 w-6 rounded-full peer-checked:scale-75 bg-[#DB4444] ${product.color1 === "darkgreen" && "peer-checked:bg-darkgreen"} ${product.color1 === "red" && "peer-checked:bg-red"} ${product.color1 === "yellow" && "peer-checked:bg-yellow"} ${product.color1 === "black" && "peer-checked:bg-black"} border border-gray-200 transition-all duration-200 hover:scale-110 peer-checked:ring-2 peer-checked:ring-offset-2`}
                ></span>
              </label>

              <label className="relative cursor-pointer">
                <input
                  type="radio"
                  name={product.id}
                  value={product.color2}
                  className="peer sr-only"
                  checked={selectedColor === product.color2}
                  onChange={() => setSelectedColor(product.color2)}
                />
                <span
                  className={`block h-6 w-6 rounded-full peer-checked:scale-75 bg-[#DB4444] ${product.color2 === "darkgreen" && "peer-checked:bg-darkgreen"} ${product.color2 === "red" && "peer-checked:bg-red"} ${product.color2 === "brown" && "peer-checked:bg-brown"} border border-gray-200 transition-all duration-200 hover:scale-110 peer-checked:ring-2 peer-checked:ring-offset-2`}
                ></span>
              </label>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WishListCard;
