import { useTranslation } from "react-i18next";

function LinksMenu() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="font-medium">{t("Manage My Account")}</h3>
      <nav className="ps-[35px] flex flex-col gap-[8px] mt-[15px] text-[#000000]/50">
        <a href="#">{t("My Profile")}</a>
        <a href="#">{t("Address Book")}</a>
        <a href="#">{t("My Payment Options")}</a>
      </nav>
      <h3 className="font-medium">{t("My Orders")}</h3>
      <nav className="ps-[35px] flex flex-col gap-[8px] mt-[15px] text-[#000000]/50">
        <a href="#">{t("My Returns")}</a>
        <a href="#">{t("My Cancellations")}</a>
      </nav>
      <h3 className="font-medium">{t("My WishList")}</h3>
    </div>
  );
}

export default LinksMenu;
