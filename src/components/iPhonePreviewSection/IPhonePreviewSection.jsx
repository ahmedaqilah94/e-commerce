import { t } from "i18next";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

export default function HomeHero() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");
  return (
    <section
      className=" grid grid-cols-1 gap-11 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[250px_minmax(0,1fr)]"
      id="home-hero"
    >
      <aside className="hidden border-e border-[#000000]/30 pt-10 pe-10 md:block h-96">
        <nav aria-label="Product categories">
          <ul className="space-y-4">
            {categories.map((category, index) => {
              const hasSubmenu = index < 2;

              return (
                <li key={category}>
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between transition-colors hover:text-red-500"
                  >
                    <span>{t(category)}</span>

                    {hasSubmenu && (
                      <ChevronRight
                        size={17}
                        className={`transition-transform  ${isArabic ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Hero Banner */}
      <div className="relative  mt-10 flex h-86 items-center bg-black text-white">
        <div className="ps-16 flex flex-col gap-2 sm:gap-5 py-2 w-[56%] z-1">
          <p className="flex items-center gap-2 sm:gap-6 tex-[#FAFAFA]">
            <img
              src={`${import.meta.env.BASE_URL}images/1200px-Apple_gray_logo 1.svg`}
              alt="iphone-icon"
            />{" "}
            iPhone 14 Series
          </p>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl  text-[#FFFFFF] font-inter leading-10 md:leading-15">
            {t("Up to 10%")}
            <br /> {t("off Voucher")}
          </h1>
          <a href="flash-sales" className="flex items-center gap-1.5">
            {t("Shop Now")}{" "}
            <ArrowRight size={17} className={isArabic && "rotate-180"} />
          </a>
        </div>
        <div className="absolute w-[60%] ms-[40%] flex justify-end">
          <img
            src={`${import.meta.env.BASE_URL}images/hero_endframe.png`}
            alt="Featured smartphone"
          />
        </div>
        <div className="absolute bottom-4 left-1/2 z-1 flex -translate-x-1/2 items-center gap-2">
          {[0, 1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className={`h-2 w-2 rounded-full ${
                dot === 2
                  ? "border border-white bg-red-500  ring-1 ring-[#000000]/30"
                  : "bg-gray-500"
              }`}
            />
          ))}
        </div>{" "}
      </div>
    </section>
  );
}
