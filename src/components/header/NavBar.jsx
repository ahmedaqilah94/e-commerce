import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function NavBar({ loggedUser }) {
  const { t } = useTranslation();

  return (
    <nav className="  lg:gap-12 items-center hidden lg:flex">
      <Link className="transition-colors hover:text-red-500" to="/">
        {t("Home")}
      </Link>
      <Link className="transition-colors hover:text-red-500" to="/contact">
        {t("Contact")}
      </Link>
      <Link className="transition-colors hover:text-red-500" to="/about">
        {t("About")}
      </Link>
      <Link
        className="transition-colors hover:text-red-500"
        to={!loggedUser ? "/signup" : "/acount"}
      >
        {!loggedUser ? t("Sign Up") : t("Acount")}
      </Link>
    </nav>
  );
}

export default NavBar;
