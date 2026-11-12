import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

function CartButton({ products }) {
  const cartLength = products.filter((item) => item.inCart > 0).length;
  return (
    <Link to="/cart" className="cursor-pointer relative">
      {cartLength > 0 && (
        <span className="bg-primary text-primary-foreground text-[12px] text-center w-4 h-4 rounded-4xl absolute -top-1 left-4">
          {cartLength}
        </span>
      )}
      <ShoppingCart className="size-6 stroke-[1.5px]" />
    </Link>
  );
}

export default CartButton;
