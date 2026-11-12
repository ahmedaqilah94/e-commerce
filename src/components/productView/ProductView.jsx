import { Link, useOutletContext, useParams } from "react-router-dom";
import SelectColor from "../card/SelectColor";
import { useState } from "react";
import ProductImages from "./ProductImages";
import ProductDetails from "./ProductDetails";
import BuyDetails from "./BuyDetails";
import RelatedProducts from "./RelatedProducts";
import { useTranslation } from "react-i18next";

function ProductView() {
  const { t } = useTranslation();
  const { products, setProducts } = useOutletContext();
  const { id } = useParams();
  const product = products.find((product) => Number(product.id) === Number(id));
  const [selectedColor, setSelectedColor] = useState(product.color1);

  return (
    <main className="w-[95%] lg:w-[81.25%] mb-[80px] mb-[140px]">
      <header>
        <nav className="my-[80px] text-[#000000]/50 flex gap-[12px]">
          <Link to="/acount">Account</Link>
          <span>/</span>
          <a href="#">{product.category}</a>
          <span>/</span>
          <a href="#" className="text-foreground">
            {product.name}
          </a>
        </nav>
      </header>

      <div className="flex flex-col lg:flex-row justify-between">
        <ProductImages product={product} selectedColor={selectedColor} />
        <div>
          <ProductDetails product={product} setProducts={setProducts} />

          <div className="flex gap-[24px] mt-[24px]">
            <h3>{t("Colours")}:</h3>
            <SelectColor
              product={product}
              setSelectedColor={setSelectedColor}
              selectedColor={selectedColor}
            />
          </div>
          <BuyDetails product={product} setProducts={setProducts} />
        </div>
      </div>
      <RelatedProducts products={products} product={product} />
    </main>
  );
}
export default ProductView;
