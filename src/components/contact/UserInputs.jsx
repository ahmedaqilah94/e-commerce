import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

function UserInputs() {
  const { t } = useTranslation();
  return (
    <form className="w-full md:w-[68.5%] h-[457px] shadow-[0_1px_13px_0_rgba(0,0,0,0.05)] px-[31px] py-[40px] flex flex-col gap-[10px] md:gap-[32px] rounded-[4px]">
      <div className="flex flex-col sm:flex-row gap-[10px] md:gap-[16px] items-center">
        <input
          type="text"
          placeholder={t("Your Name")}
          className="bg-[#F5F5F5] w-full sm:w-1/3 py-[13px] rounded-[4px] ps-[16px]"
        />
        <input
          type="text"
          placeholder={t("Your Email")}
          className="bg-[#F5F5F5] w-full sm:w-1/3 py-[13px] rounded-[4px] ps-[16px]"
        />
        <input
          type="phone"
          placeholder={t("Your Phone")}
          className="bg-[#F5F5F5] w-full sm:w-1/3 py-[13px] rounded-[4px] ps-[16px]"
        />
      </div>
      <textarea
        type="text"
        placeholder={t("Your Massage")}
        className="w-full h-[207px] bg-[#F5F5F5] py-[13px] rounded-[4px] ps-[16px] "
      />
      <Button className="self-end">{t("Send Massage")} </Button>
    </form>
  );
}

export default UserInputs;
