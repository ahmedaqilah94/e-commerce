import { updateProduct } from "@/data";
import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import ModalMessage from "./ModalMessage";
import { useTranslation } from "react-i18next";

function StarRating({ product, setProducts, loggedUser }) {
  const { t } = useTranslation();
  const initialPercentage = (product.rating * 100) / 5;
  const [userRating, setUserRating] = useState(initialPercentage);
  const [hoverRating, setHoverRating] = useState(initialPercentage);

  const [modalData, setModalData] = useState({
    isOpen: false,
    message: "",
  });

  const handleRating = (userRate) => {
    if (loggedUser?.isLogin === true) {
      if (product.hasRated === false) {
        const totalUserRatingStars =
          (5 * product.reviewsCount * product.rating) / 5;
        const fainalRatingStars =
          ((totalUserRatingStars + userRate) * 5) /
          (5 * product.reviewsCount + 5);

        const usersRatingStarsPercentage = (fainalRatingStars / 5) * 100;
        setUserRating(usersRatingStarsPercentage);
        setModalData({
          isOpen: true,
          message: `${t("Thank you for rating ")}  ${"⭐".repeat(userRate)}`,
        });

        updateProduct(product.id, setProducts, {
          reviewsCount: product.reviewsCount + 1,
          hasRated: true,
        });
      }
    }
  };

  return (
    <div className="flex w-25 group relative">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <Button
            key={index}
            size="icon-xs"
            className={"bg-background cursor-pointer hover:bg-background"}
            onClick={() => setUserRating((starValue / 5) * 100)}
            onMouseEnter={() => setHoverRating((starValue / 5) * 100)}
            onMouseLeave={() => setHoverRating(userRating)}
          >
            <Star className="stroke-none fill-[#000000]/25 size-5" />{" "}
          </Button>
        );
      })}
      <div
        className="flex h-full overflow-hidden absolute"
        style={{ width: `${hoverRating}%` }}
      >
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <Button
              key={index}
              size="icon-xs"
              className={"bg-background cursor-pointer hover:bg-background"}
              onClick={() => handleRating(starValue)}
              onMouseEnter={() => setHoverRating((starValue / 5) * 100)}
              onMouseLeave={() => setHoverRating(userRating)}
            >
              <Star className="stroke-none fill-[#FFAD33] size-5 min-w-5" />
            </Button>
          );
        })}
      </div>
      <ModalMessage
        isOpen={modalData.isOpen}
        message={modalData.message}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
      />
    </div>
  );
}

export default StarRating;
