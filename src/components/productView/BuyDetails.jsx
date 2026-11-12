import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { updateProduct } from "@/data";
import { useTranslation } from "react-i18next";

function BuyDetails({ product, setProducts }) {
  const { t } = useTranslation();
  const increamentHandler = () => {
    updateProduct(product.id, setProducts, {
      inCart: Number(product.inCart) + 1,
    });
  };
  const decreamentHander = () => {
    if (Number(product.inCart > 0))
      updateProduct(product.id, setProducts, {
        inCart: Number(product.inCart) - 1,
      });
  };

  const toggleAddToFavorite = () => {
    updateProduct(product.id, setProducts, {
      isFavorite: !product.isFavorite,
    });
  };
  return (
    <>
      <div className="flex gap-[24px] items-center py-[24px]">
        <h3>Size:</h3>
        <div className="flex gap-[16px]">
          <label
            htmlFor="xs"
            className=" size-[32px] border rounded-[4px] text-[14px] cursor-pointer has-checked:bg-primary has-checked:border-none has-checked:text-primary-foreground flex justify-center items-center"
          >
            <input type="radio" className="hidden" name="size" id="xs" />
            XS
          </label>
          <label
            htmlFor="s"
            className=" size-[32px] border rounded-[4px] text-[14px] cursor-pointer has-checked:bg-primary has-checked:border-none has-checked:text-primary-foreground flex justify-center items-center"
          >
            <input type="radio" className="sr-only" name="size" id="s" />s
          </label>
          <label
            htmlFor="m"
            className=" size-[32px] border rounded-[4px] text-[14px] cursor-pointer has-checked:bg-primary has-checked:border-none has-checked:text-primary-foreground flex justify-center items-center"
          >
            <input type="radio" className="hidden" name="size" id="m" />M
          </label>
          <label
            htmlFor="l"
            className=" size-[32px] border rounded-[4px] text-[14px] cursor-pointer has-checked:bg-primary has-checked:border-none has-checked:text-primary-foreground flex justify-center items-center"
          >
            <input type="radio" className="hidden" name="size" id="l" />L
          </label>
          <label
            htmlFor="xl"
            className=" size-[32px] border rounded-[4px] text-[14px] cursor-pointer has-checked:bg-primary has-checked:border-none has-checked:text-primary-foreground flex justify-center items-center"
          >
            <input type="radio" className="hidden" name="size" id="xl" />
            XL
          </label>
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:flex-row gap-[16px] items-center">
          <div className="flex">
            <Button
              onClick={decreamentHander}
              variant="secondary"
              className="rounded-e-none w-[40px] h-[44px] p-0"
            >
              -
            </Button>
            <label className="border-y flex items-center justify-center w-[80px] h-[44px]">
              {product.inCart}
            </label>
            <Button
              onClick={increamentHandler}
              className="rounded-s-none w-[40px] h-[44px] p-0 border border-primary"
            >
              +
            </Button>
          </div>
          <Button className="h-[44px]">Buy Now</Button>
          <Button
            className={`bg-background text-foreground border p-0 size-[40px] border-[#00000080]/50 ${product.isFavorite && "bg-primary text-primary-foreground"}`}
            onClick={toggleAddToFavorite}
          >
            <Heart className="stroke-[1.5px]" />
          </Button>
        </div>
      </div>

      <div className="h-[180px] border rounded-[4px] mt-[40px]">
        <div className="border-b flex gap-[16px] h-[90px] p-[16px] items-center">
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_261_4843)">
                <path
                  d="M15.0007 28.3333C15.0007 30.1743 13.5083 31.6667 11.6673 31.6667C9.82637 31.6667 8.33398 30.1743 8.33398 28.3333C8.33398 26.4924 9.82637 25 11.6673 25C13.5083 25 15.0007 26.4924 15.0007 28.3333Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="black"
                />
                <path
                  d="M31.6667 28.3333C31.6667 30.1743 30.1743 31.6667 28.3333 31.6667C26.4924 31.6667 25 30.1743 25 28.3333C25 26.4924 26.4924 25 28.3333 25C30.1743 25 31.6667 26.4924 31.6667 28.3333Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="black"
                />
                <path
                  d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M21.6673 10.0002H28.8683C29.5708 10.0002 30.2218 10.3688 30.5833 10.9712L35.0007 18.3335V26.3335C35.0007 27.4381 34.1052 28.3335 33.0007 28.3335H31.6673M35.0007 18.3335H21.6673"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="black"
                />
                <path
                  d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M21.3333 9.66667H28.5343C29.2368 9.66667 29.8878 10.0353 30.2493 10.6377L34.6667 18V26C34.6667 27.1046 33.7712 28 32.6667 28H32M34.6667 18H21.3333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="black"
                />
                <path
                  d="M5 11.8182H11.6667"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="black"
                />
                <path
                  d="M1.81836 15.4545H8.48503"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="black"
                />
                <path
                  d="M5 19.0909H11.6667"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_261_4843">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <h3 className="font-medium">{t("Free Delivery")}</h3>
            <a className="underline text-[12px]" href="#">
              {t("Enter your postal code for Delivery Availability")}
            </a>
          </div>
        </div>

        <div className="flex gap-[16px] h-[90px] p-[16px] items-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_261_4865)">
              <path
                d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="black"
              />
              <path
                d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_261_4865">
                <rect width="40" height="40" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div>
            <h3 className="font-medium">{t("Return Delivery")}</h3>
            <p className=" text-[12px]">
              {t("Free 30 Days Delivery Returns.")}
              <a className="underline" href="#">
                {t("Details")}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyDetails;
