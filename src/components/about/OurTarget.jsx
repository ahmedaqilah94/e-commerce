import { useTranslation } from "react-i18next";
import { AnualIcons, CustomerIcons, MopnthlyIcon, SallersIcon } from "./Icons";

function OurTarget() {
  const { t } = useTranslation();

  const targetList = [
    {
      id: 1,
      name: "Sallers active our site",
      count: "10.5",
      icon: SallersIcon,
    },
    { id: 2, name: "Mopnthly Produduct Sale", count: "33", icon: MopnthlyIcon },
    {
      id: 3,
      name: "Customer active in our site",
      count: "45.5",
      icon: CustomerIcons,
    },
    {
      id: 4,
      name: "Anual gross sale in our site",
      count: "25",
      icon: AnualIcons,
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[30px] my-[140px] place-items-center">
      {targetList.map((item) => {
        const IconComponent = item.icon;

        return (
          <button
            key={item.id}
            className="flex flex-col items-center justify-center gap-4 w-[100%] md:w-[230px] xl:w-[270px] h-[230px] border rounded-[4px] cursor-pointer focus:bg-primary focus:text-white group focus:border-0"
          >
            <div className="size-[80px] bg-[#2F2E30]/30 rounded-full flex justify-center items-center ">
              <div className="size-[58px] bg-[#000000] group-focus:bg-white rounded-full flex justify-center items-center">
                <IconComponent className="text-white group-focus:text-black" />
              </div>
            </div>
            <h3 className="text-[32px] font-bold tracking-[4%] leading-[30px]">
              {item.count}k
            </h3>
            <h3>{t(item.name)}</h3>
          </button>
        );
      })}
    </div>
  );
}

export default OurTarget;
