import LanguageDropDown from "./LanguageDropDown";
import { useTranslation } from "react-i18next";

function TopHeader() {
  const { t } = useTranslation();

  return (
    <header className="flex justify-center w-full h-12 bg-accent text-accent-foreground">
      <div className="w-[90%] lg:w-[81.25%] h-12  flex justify-between items-center ">
        <div></div>
        <h1 className=" sm:hidden text-2xl font-bold font-inter ">Exclusive</h1>
        <p className=" hidden sm:block text-[14px] text-center">
          {t(
            "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
          )}
          <a className="underline ms-2 font-semibold duration-300" href="#">
            {t("ShopNow")}
          </a>
        </p>
        <LanguageDropDown />
      </div>
    </header>
  );
}

export default TopHeader;
