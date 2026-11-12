import { useTranslation } from "react-i18next";
import { Link, useOutletContext } from "react-router-dom";

function AccountHeader() {
  const { t } = useTranslation();
  const { loggedUser } = useOutletContext();
  return (
    <header className="w-full flex justify-between my-[80px]">
      <nav className=" text-[#000000]/50 flex gap-[12px]">
        <Link to="/">{t("Home")}</Link>
        <span>/</span>
        <Link to="/acount" className="text-foreground">
          {t("My Account")}
        </Link>
      </nav>
      <h3>
        {t("Welcome!")}{" "}
        <span className="text-primary">{loggedUser?.userName}</span>
      </h3>
    </header>
  );
}

export default AccountHeader;
