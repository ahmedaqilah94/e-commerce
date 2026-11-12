import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ContactHeaderlink() {
  const { t } = useTranslation();
  return (
    <nav className="my-[80px] text-[#000000]/50 flex gap-[12px]">
      <Link to="/"> {t("Home")} </Link>
      <span>/</span>
      <Link to="/contact" className="text-foreground">
        {" "}
        {t("Contact")}
      </Link>
    </nav>
  );
}

export default ContactHeaderlink;
