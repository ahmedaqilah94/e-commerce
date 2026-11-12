import { useTranslation } from "react-i18next";

function OurStory() {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col md:flex-row w-full justify-between items-center">
      <div className="flex flex-col justify-center md:w-[36.5%] ms-[9%]">
        <h1 className="text-[54px] tracking-[6%] font-semibold mb-[40px]">
          {t("Our Story")}
        </h1>
        <p>
          {t(
            "Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.",
          )}
        </p>
        <p className="mt-[24px]">
          {t(
            "Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.",
          )}
        </p>
      </div>
      <div className="w-[90%] ms-[9%] md:w-[50%] h-[609px] bg-[#EB7EA8] rounded-tl-[4px] rounded-bl-[4px] "></div>
    </section>
  );
}

export default OurStory;
