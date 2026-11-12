import { Check } from "lucide-react";
import { Input } from "react-aria-components";
import { useTranslation } from "react-i18next";

function UserDetailsSide({ onChangeHandler }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:w-[50%]">
      <label className="text-[#000000]/40" htmlFor="firstName">
        {t("First Name")} <span>*</span>
      </label>
      <input
        className="bg-[#F5F5F5] h-[50px] max-w-[470px] px-[15px] mt-[8px]"
        type="text"
        name="firstName"
        id="firstName"
        onChange={onChangeHandler}
        required
      />

      <label className="text-[#000000]/40 mt-[32px]" htmlFor="Company">
        {t("Company Name")} <span>*</span>
      </label>
      <input
        className="bg-[#F5F5F5] h-[50px] max-w-[470px] px-[15px] mt-[8px]"
        type="text"
        name="Company"
        id="Company"
        required
      />

      <label className="text-[#000000]/40 mt-[32px]" htmlFor="Street">
        {t("Street Address")} <span>*</span>
      </label>
      <input
        className="bg-[#F5F5F5] h-[50px] max-w-[470px] px-[15px] mt-[8px]"
        type="text"
        name="address"
        id="address"
        required
        onChange={onChangeHandler}
      />

      <label className="text-[#000000]/40 mt-[32px]" htmlFor="Apartment">
        {t("Apartment, floor, etc. (optional)")}
      </label>
      <input
        className="bg-[#F5F5F5] h-[50px] max-w-[470px] px-[15px] mt-[8px]"
        type="text"
        name="Apartment"
        id="Apartment"
        onChange={onChangeHandler}
      />

      <label className="text-[#000000]/40 mt-[32px]" htmlFor="City">
        {t("Town/City")} <span>*</span>
      </label>
      <input
        className="bg-[#F5F5F5] h-[50px] max-w-[470px] px-[15px] mt-[8px]"
        type="text"
        name="city"
        id="city"
        required
        onChange={onChangeHandler}
      />

      <label className="text-[#000000]/40 mt-[32px]" htmlFor="phone">
        {t("Phone Number")} <span>*</span>
      </label>
      <input
        className="bg-[#F5F5F5] h-[50px] max-w-[470px] px-[15px] mt-[8px]"
        type="tel"
        id="phone"
        name="phone"
        pattern="^([0-9]{11})$"
        required
        onChange={onChangeHandler}
      />

      <label className="text-[#000000]/40 mt-[32px]" htmlFor="email">
        {t("Email Address")}
        <span>*</span>
      </label>
      <input
        className="bg-[#F5F5F5] h-[50px] max-w-[470px] px-[15px] mt-[8px]"
        type="email"
        id="email"
        name="email"
        required
        onChange={onChangeHandler}
        pattern="^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$"
      />

      <div className="flex mt-[24px] gap-[16px]">
        <label
          htmlFor="saveCheck"
          className="h-[24px] w-[24px] rounded-[4px] border has-checked:bg-primary has-checked:border-none duration-150 cursor-pointer"
        >
          <Input
            type="checkbox"
            name="saveCheck"
            id="saveCheck"
            onChange={onChangeHandler}
            className="hidden"
          />
          <Check className="size-6 text-white" />
        </label>
        <label htmlFor="saveCheck">
          {t("Save this information for faster check-out next time")}
        </label>
      </div>
    </div>
  );
}

export default UserDetailsSide;
