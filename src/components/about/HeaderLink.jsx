import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function HeaderLink() {
  const { t } = useTranslation();
  return (
    <header className="w-[95%] lg:w-[81.25%]">
      <nav className="my-[80px] text-[#000000]/50 flex gap-[12px]">
        <Link to="/">{t("Home")}</Link>
        <span>/</span>
        <Link to="/about" className="text-foreground">
          {t("About")}
        </Link>
      </nav>
    </header>
  );
}

export default HeaderLink;
