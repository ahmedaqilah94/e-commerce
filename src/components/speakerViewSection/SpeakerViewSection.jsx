import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import SpeakerViewCountdown from "./SpeakerViewCountdown";
import speaker from "@/assets/images/products/JBL-speaker.png";

function SpeakerViewSection() {
  const { t } = useTranslation();
  return (
    <section className="bg-[#000000] mt-[140px] md:h-[500px] w-full text-[#FAFAFA] px-[20px] md:px-[56px] md:py-[69px] flex items-center justify-between relative">
      <div className="flex flex-col gap-[32px] justify-center w-[60%] z-1">
        <span className="text-[#6eefa2]">Categories</span>
        <h1 className="font-semibold font-inter text-2xl sm:text-4xl lg:text-[48px] md:leading-15">
          {t("Enhance Your")} <br />
          {t("Music Experience")}
        </h1>
        <SpeakerViewCountdown />

        <Button variant="green" className="w-42.75 mt-2 cursor-pointer">
          {t("Buy Now!")}
        </Button>
      </div>
      <div className="h-[400px] w-[400px] rounded-[50%] shadow-2xl shadow-[#D9D9D9] bg-[#D9D9D9] blur-[200px] me-[70px]"></div>
      <div className="absolute w-[60%] ms-[33%] flex justify-end">
        <img src={speaker} alt="JBL Speaker" />
      </div>
    </section>
  );
}

export default SpeakerViewSection;
