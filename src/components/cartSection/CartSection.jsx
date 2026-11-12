import { Link, useOutletContext } from "react-router-dom";
import CartCard from "./CartCard";
import { Button } from "../ui/button";
import { updateProduct } from "@/data";
import PaymentSection from "./PaymentSection";
import { useTranslation } from "react-i18next";

function CartSection() {
  const { t } = useTranslation();
  const { products, setProducts } = useOutletContext();
  const cartProducts = products.filter((product) => product.inCart > 0);

  const removeAllHander = () => {
    cartProducts.map((product) =>
      updateProduct(product.id, setProducts, { inCart: 0 }),
    );
  };
  const totalCartPrice = products.reduce((total, product) => {
    return total + Number(product.currentPrice) * Number(product.inCart || 0);
  }, 0);
  return (
    <>
      <section className="w-full mt-[80px]">
        <div className="">
          <h4 className="text-muted-foreground text-[14px]">
            {t("Home")} / <span className="text-foreground">{t("Cart")}</span>
          </h4>
          {cartProducts.length ? (
            <table className="w-full border-separate border-spacing-y-[40px] mt-[40px]">
              <thead className=" h-[72px] shadow-[0_1px_13px_0_rgba(0,0,0,0.05)] rounded-[4px]">
                <tr>
                  <th className="text-start w-1/3 ps-7.5 font-normal">
                    {t("Product")}
                  </th>
                  <th className="text-start w-1/3 font-normal">{t("Price")}</th>
                  <th className="text-start w-1/3 font-normal">
                    {t("Quantity")}
                  </th>
                  <th className="text-end pe-7.5 font-normal hidden sm:table-cell ">
                    {t("Subtotal")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((product) => (
                  <CartCard key={product.id} product={product} />
                ))}
              </tbody>
            </table>
          ) : (
            <h1 className="text-center text-3xl bg-muted text-muted-foreground rounded-2xl leading-30 mt-[80px]">
              {t("Your Card Is Empty")}
            </h1>
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-[16px] mt-[20px]">
          <Button variant="secondary" className="p-0">
            <Link to="/" className="px-[48px] py-[20px]">
              {t("Return To Shop")}
            </Link>
          </Button>
          {cartProducts.length ? (
            <Button variant="secondary" onClick={removeAllHander}>
              {t("Update Cart")}
            </Button>
          ) : null}
        </div>
      </section>
      <PaymentSection totalCartPrice={totalCartPrice} />
    </>
  );
}

export default CartSection;
