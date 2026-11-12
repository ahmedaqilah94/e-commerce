import SectionHeader from "../sectionHeader/SectionHeader";
import playstation5 from "@/assets/images/products/playstation5.png";
import perfume from "@/assets/images/products/perfume.png";
import speackers from "@/assets/images/products/speackers.png";
import { useTranslation } from "react-i18next";

function FeaturedSection() {
  const { t } = useTranslation();
  return (
    <section className="w-full my-[140px]">
      <SectionHeader topTitle={t("Featured")} bottomTitle={t("New Arrival")} />

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-[10px] md:gap-[32px] ">
        <div className="bg-[#000000] text-[#FAFAFA] col-span-2 row-span-2 flex justify-center p-[32px] h-[600px] relative">
          <div className="z-1 me-auto self-end">
            <h3 className="text-[24px] font-[600px] leading-6 tracking-[3%]">
              {t("Play Station 5")}
            </h3>
            <p className="text-[14px] font-[400px] leading-[21px] my-[16px]">
              {t("Black and White version of the PS5 ")}
              <br />
              coming out on sale.
            </p>
            <button className="underline cursor-pointer">
              {t("Shop Now")}
            </button>
          </div>
          <img
            src={playstation5}
            alt="playstation5"
            className="absolute top-[89px]"
          />
        </div>
        <div className="bg-[#000000] text-[#FAFAFA] col-span-2 flex flex-col justify-end p-[32px] relative">
          <div className="z-1">
            <h3 className="text-[24px] font-[600px] leading-6 tracking-[3%]">
              {t("Women’s Collections")}
            </h3>
            <p className="text-[14px] font-[400px] leading-[21px] my-[16px]">
              {t("Featured woman collections that give you another vibe.")}
            </p>
            <button className="underline cursor-pointer">
              {t("Shop Now")}
            </button>
          </div>
        </div>
        <div className="bg-[#000000] text-[#FAFAFA] flex justify-center p-[32px] h-[284px] relative">
          <div className="z-1 me-auto self-end">
            <h3 className="text-[24px] font-[600px] leading-6 tracking-[3%]">
              {t("Speakers")}
            </h3>
            <p className="text-[14px] font-[400px] leading-[21px] my-[8px]">
              {t("Amazon wireless speakers")}
            </p>
            <button className="underline cursor-pointer">Shop Now</button>
          </div>
          <div className="h-[100%] w-[100%] rounded-[50%] shadow-2xl shadow-[#D9D9D9] bg-[#D9D9D9] blur-[200px] absolute"></div>
          <img src={speackers} alt="playstation5" className="absolute " />
        </div>
        <div className=" bg-[#000000] text-[#FAFAFA] flex justify-center p-[32px] h-[284px] relative">
          <div className="z-1 me-auto self-end">
            <h3 className="text-[24px] font-[600px] leading-6 tracking-[3%]">
              {t("Perfume")}
            </h3>
            <p className="text-[14px] font-[400px] leading-[21px] my-[8px]">
              {t("GUCCI INTENSE OUD EDP")}
            </p>
            <button className="underline cursor-pointer">
              {t("Shop Now")}
            </button>
          </div>
          <div className="h-[100%] w-[100%] rounded-[50%] shadow-2xl shadow-[#D9D9D9] bg-[#D9D9D9] blur-[200px] absolute"></div>
          <img src={perfume} alt="playstation5" className="absolute " />
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
