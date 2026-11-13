import { useOutletContext } from "react-router-dom";
import StarRating from "../card/StarRating";

function ProductDetails({ product, setProducts }) {
  const { loggedUser } = useOutletContext();
  return (
    <section className="border-b">
      <h1>{product.name}</h1>
      <div className="flex gap-[16px] my-[16px]">
        <StarRating
          product={product}
          setProducts={setProducts}
          loggedUser={loggedUser}
        />
        <h5 className="text-muted-foreground">
          ({product.reviewsCount} Reviews)
        </h5>
        <span className="text-muted-foreground">|</span>
        <h5 className="text-[#00FF66]">In Stock</h5>
      </div>
      <h5 className="text-[24px] leading-[24px] tracking-[3%]">
        ${product.currentPrice}
      </h5>
      <p className="text-[14px] py-[24px]">
        PlayStation 5 Controller Skin High quality vinyl with air <br />
        channel adhesive for easy bubble free install & mess <br />
        free removal Pressure sensitive.
      </p>
    </section>
  );
}

export default ProductDetails;
