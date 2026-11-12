import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

function PaymentSection({ totalCartPrice }) {
  const { t } = useTranslation();
  return (
    <section className="flex justify-between flex-col lg:flex-row mt-[80px] gap-5">
      <div className="flex flex-col sm:flex-row justify-between gap-[16px]">
        <input
          type="text"
          placeholder={t("Coupon Code")}
          className="w-[300px] h-[56px] ps-[24px] border rounded-[4px]"
        />
        <Button>{t("Apply Coupon")}</Button>
      </div>

      <div className="border border-foreground rounded-[4px] lg:w-[40%] px-[24px] py-[32px] flex flex-col">
        <h3 className="text-[20px] font-medium leading-[28px] mb-[8px]">
          {t("Cart Total")}
        </h3>
        <div>
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
            <h4>${totalCartPrice}</h4>
          </div>
        </div>
        <Button className="self-center p-0 w-[100%] sm:w-min">
          <Link to="/cart/checkOut" className="py-[15px] px-[48px]">
            {t("Procees to checkout")}
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default PaymentSection;
