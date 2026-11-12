import { Copyright, SendHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import QrCode from "@/assets/images/Qrcode.svg";
import googlePlay from "@/assets/images/google-play.svg";
import appStore from "@/assets/images/app-store.svg";
import { useTranslation } from "react-i18next";

function FooterSection() {
  const { t } = useTranslation();
  return (
    <footer className="bg-accent text-accent-foreground pt-[80px] flex flex-col items-center justify-center ">
      <div className="w-[95%] lg:w-[81.25%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px] mb-[60px]">
        <ul>
          <h2 className="text-[24px] font-bold tracking-[3%]">Exclusive</h2>
          <h3 className="my-[24px] text-[20px] font-medium">
            {t("Subscribe")}
          </h3>
          <p>{t("Get 10% off your first order")}</p>
          <div className="mt-[8px] xl:mt-[16px] flex">
            <input
              type="text"
              placeholder={t("Enter your email")}
              className="border border-[#FAFAFA] rounded-[4px] py-[12px] ps-[16px] "
            />
            <button type="button" className="-ms-[36px]">
              <SendHorizontal />
            </button>
          </div>
        </ul>

        <ul className="max-w-[175px]">
          <h3 className="mb-[24px] text-[20px] font-medium">{t("Support")}</h3>
          <p>{t("111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.")}</p>
          <p className="my-[8px] xl:my-[16px]">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </ul>

        <ul>
          <h3 className="mb-[24px] text-[20px] font-medium">Account</h3>
          <nav className="flex flex-col gap-[8px] xl:gap-[16px]">
            <Link to="/account" className="hover:underline">
              {t("My Account")}
            </Link>
            <Link to="/login" className="hover:underline">
              {t("Login / Register")}
            </Link>
            <Link to="/cart" className="hover:underline">
              {t("Cart")}
            </Link>
            <Link to="/wishlist" className="hover:underline">
              {t("Wishlist")}
            </Link>
            <Link to="/" className="hover:underline">
              {t("Shop")}
            </Link>
          </nav>
        </ul>

        <ul>
          <h3 className="mb-[24px] text-[20px] font-medium">
            {t("Quick Link")}
          </h3>
          <nav className="flex flex-col gap-[8px] xl:gap-[16px]">
            <a href="#" className="hover:underline">
              {t("Privacy Policy")}
            </a>
            <a href="#" className="hover:underline">
              {t("Terms Of Use")}
            </a>
            <a href="#" className="hover:underline">
              {t("FAQ")}
            </a>
            <a href="#" className="hover:underline">
              {t("Contact")}
            </a>
          </nav>
        </ul>

        <ul>
          <h3 className="mb-[24px] text-[20px] font-medium">Download App</h3>
          <p className="text-[12px] text-[#FAFAFA]/70">
            {t("Save $3 with App New User Only")}
          </p>
          <div className="flex gap-[9px] max-w-[198px]">
            <img src={QrCode} alt="QrCode" className="w-[40%]" />
            <div className="flex flex-col gap-[9px] justify-end">
              <img src={googlePlay} alt="googlePlay" />
              <img src={appStore} alt="appStore" />
            </div>
          </div>
        </ul>
      </div>
      <p className="text-[12px] lg:text-[16px] text-[#F9F9F933] flex gap-1.5 border-t border-[#FFFFFF]/40 w-full justify-center pt-[16px] mb-[24px] items-center">
        <Copyright className="w-4 h-4" />
        {t("Copyright Rimel 2022. All right reserved")}
      </p>
    </footer>
  );
}

export default FooterSection;
