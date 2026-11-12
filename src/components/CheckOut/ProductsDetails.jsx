import { useOutletContext } from "react-router-dom";
import { useTranslation } from "react-i18next";
import bkash from "@/assets/images/Bkash.svg";
import visa from "@/assets/images/Visa.svg";
import masterCard from "@/assets/images/Mastercard.svg";
import nagad from "@/assets/images/Nagad.svg";
import { Button } from "../ui/button";

function ProductsDetails({ onChangeHandler }) {
  const { t } = useTranslation();
  const { products } = useOutletContext();

  const filteredProducts = products.filter((product) => product.inCart > 0);
  const totalCartPrice = products.reduce((total, product) => {
    return total + Number(product.currentPrice) * Number(product.inCart || 0);
  }, 0);

  return (
    <div className="lg:w-[39%]">
      <div className="max-w-[425px]">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex justify-between my-[32px] items-center"
          >
            <div className="size-[45px] flex gap-[24px] items-center">
              <img src={product.image} alt={product.name} />
              <h3 className="whitespace-nowrap">{product.shortName}</h3>
            </div>
            <h4>
              $
              {(Number(product.inCart) * Number(product.currentPrice)).toFixed(
                2,
              )}
            </h4>
          </div>
        ))}

        <div className="flex justify-between items-center border-b">
          <h4 className="py-[16px]">{t("Subtotal")}:</h4>
          <h4>${totalCartPrice}</h4>
        </div>

        <div className="flex justify-between items-center border-b">
          <h4 className="py-[16px]">{t("Shipping")}:</h4>
          <h4>{t("Free")}</h4>
        </div>

        <div className="flex justify-between items-center">
          <h4 className="py-[16px]">{t("Total")}:</h4>
          <h4>${totalCartPrice.toFixed(2)}</h4>
        </div>

        <div>
          <div className="flex justify-between items-center mt-[16px]">
            <div className="flex gap-[16px]">
              <input
                onChange={onChangeHandler}
                type="radio"
                value="bank"
                required
                id="bank"
                name="paymentType"
                className="size-[24px] accent-accent"
              />
              <label htmlFor="bank">{t("Bank")}</label>
            </div>
            <div className="flex gap-[8px]">
              <img src={bkash} alt="Bkash" />
              <img src={visa} alt="Visa" />
              <img src={masterCard} alt="Mastercard" />
              <img src={nagad} alt="Nagad" />
            </div>
          </div>

          <div className="flex gap-[16px] mt-[32px]">
            <input
              onChange={onChangeHandler}
              value="cash"
              type="radio"
              required
              id="cash"
              name="paymentType"
              className="size-[24px] accent-accent"
            />
            <label htmlFor="cash">{t("Cash on delivery")}</label>
          </div>
        </div>
      </div>

      <div className="mt-[32px] flex flex-col gap-[16px] xl:flex-row">
        <input
          type="text"
          placeholder={t("Coupon Code")}
          className="w-[300px] h-[56px] ps-[24px] border rounded-[4px]"
        />
        <Button type="button">{t("Apply Coupon")}</Button>
      </div>

      <Button type="submit" className="mt-[32px]">
        {t("Place Order")}
      </Button>
    </div>
  );
}

export default ProductsDetails;
