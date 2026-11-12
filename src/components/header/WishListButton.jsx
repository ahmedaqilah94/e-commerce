import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

function WishListButton({ products }) {
  const wishListCount = products.filter(
    (item) => item.isFavorite === true,
  ).length;
  return (
    <Link to="/wishlist" className="cursor-pointer relative">
      {wishListCount > 0 && (
        <span className="bg-primary text-primary-foreground text-[12px] w-4 h-4 rounded-4xl absolute -top-1 left-4 text-center">
          {wishListCount}
        </span>
      )}
      <Heart className="size-6 stroke-[1.5px]" />
    </Link>
  );
}

export default WishListButton;
