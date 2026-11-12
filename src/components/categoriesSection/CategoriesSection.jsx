import { useTranslation } from "react-i18next";
import SectionHeader from "../sectionHeader/SectionHeader";
import {
  CameraIcon,
  ComputerIcon,
  GamePadIcon,
  HeadPhoneIcon,
  PhoneIcon,
  WatchIcon,
} from "./CategoryIcons";
import { useRef } from "react";

function CategoriesSection() {
  const { t } = useTranslation();
  const scrollContainer = useRef(null);

  const scrollHandler = (direction) => {
    const container = scrollContainer.current;
    if (container) {
      if (direction === "left") {
        container.scrollLeft -= 200;
      } else {
        container.scrollLeft += 200;
      }
    }
  };

  const categoriesList = [
    { id: 1, name: "Phones", icon: PhoneIcon },
    { id: 2, name: "Computers", icon: ComputerIcon },
    { id: 3, name: "SmartWatch", icon: WatchIcon },
    { id: 4, name: "Camera", icon: CameraIcon },
    { id: 5, name: "HeadPhones", icon: HeadPhoneIcon },
    { id: 6, name: "Gaming", icon: GamePadIcon },
  ];

  return (
    <section className="mt-[80px] pb-[70px] border-b">
      <SectionHeader
        topTitle={t("Categories")}
        bottomTitle={t("Browse By Category")}
        arows
        onLeftClick={() => scrollHandler("left")}
        onRightClick={() => scrollHandler("right")}
      />
      <div
        ref={scrollContainer}
        className="flex mt-3 lg:mt-[60px] overflow-scroll scroll-smooth scrollbar-none"
      >
        <div className="flex gap-7.5 ">
          {categoriesList.map((category) => {
            const IconComponent = category.icon;

            return (
              <button
                key={category.id}
                className="flex flex-col items-center justify-center gap-4 w-[170px] h-[145px] border rounded-[4px] cursor-pointer focus:bg-primary focus:text-white group focus:border-0"
              >
                <IconComponent className={"group-focus:text-white"} />
                <h3>{t(category.name)}</h3>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
