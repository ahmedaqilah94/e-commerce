import { Truck, Headphones, ShieldCheck, ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";

function ServiceFeature() {
  const { t } = useTranslation();

  const featuresData = [
    {
      id: 1,
      icon: Truck,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      id: 2,
      icon: Headphones,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <section className="mb-[32px] bg-background text-foreground flex flex-col gap-[62px] ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto justify-items-center">
          {featuresData.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center max-w-[300px] group"
              >
                <div className="w-20 h-20 bg-[#2F2E30]/30 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105">
                  <div className="w-14 h-14 bg-foreground text-background rounded-full flex items-center justify-center">
                    <IconComponent className="w-10 h-10 stroke-[1.5]" />
                  </div>
                </div>

                <h2 className="font-semibold text-lg md:text-[20px] leading-[28px] uppercase mb-2">
                  {t(item.title)}
                </h2>

                <p className=" text-sm font-normal leading-[21px]">
                  {t(item.description)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Button
        onClick={() => {
          const element = document.getElementById("home-hero");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }}
        size="icon-lg"
        className="bg-secondary text-secondary-foreground self-end"
      >
        <ArrowUp className="size-6 stroke-[1.5px]" />
      </Button>
    </section>
  );
}

export default ServiceFeature;
