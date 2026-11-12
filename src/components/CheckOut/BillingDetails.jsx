import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import UserDetailsSide from "./UserDetailsSide";
import ProductsDetails from "./ProductsDetails";
import ModalMessage from "../card/ModalMessage";

function BillingDetails() {
  const { t } = useTranslation();

  const [modalData, setModalData] = useState({
    isOpen: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    firstName: "",
    company: "",
    address: "",
    Apartment: "",
    city: "",
    email: "",
    phone: "",
    SaveCheck: "",
    paymentType: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setModalData({
      isOpen: true,
      message: t("Order placed succesfully ✅"),
    });
    console.log(formData);
  };

  return (
    <main>
      <nav className="text-[14px] text-[#000000]/50 flex flex-wrap gap-[12px]">
        <Link to="/account">{t("Account")}</Link>
        <span>/</span>
        <Link to="/account">{t("My Account")}</Link>
        <span>/</span>
        <Link to="/products">{t("Product")}</Link>
        <span>/</span>
        <Link to="/cart">{t("View Cart")}</Link>
        <span>/</span>
        <Link to="/checkout" className="text-foreground">
          {t("CheckOut")}
        </Link>
      </nav>

      <h2 className="mt-[80px] mb-[48px] text-[36px] font-medium">
        {t("Billing Details")}
      </h2>

      <form
        onSubmit={handlePlaceOrder}
        className="flex justify-between items-center flex-col md:flex-row gap-5"
      >
        <UserDetailsSide onChangeHandler={onChangeHandler} />
        <ProductsDetails onChangeHandler={onChangeHandler} />
      </form>

      <ModalMessage
        isOpen={modalData.isOpen}
        message={modalData.message}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
      />
    </main>
  );
}

export default BillingDetails;
