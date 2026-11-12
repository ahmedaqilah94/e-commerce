import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import SectionHeaderCountdown from "./SectionHeaderCountdown";
import { useTranslation } from "react-i18next";

function SectionHeader({
  topTitle,
  bottomTitle,
  hasCountDown,
  buttonVarient,
  arows,
  buttonText,
  onRightClick,
  onLeftClick,
  buttonClickHandler,
}) {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const leftClick = isArabic ? onRightClick : onLeftClick;
  const rightClick = isArabic ? onLeftClick : onRightClick;

  const LeftArrow = isArabic ? ArrowRight : ArrowLeft;
  const RightArrow = isArabic ? ArrowLeft : ArrowRight;
  return (
    <div className="flex w-full flex-col gap-6">
      {topTitle && (
        <div className="flex items-center text-primary gap-[16px] font-semibold">
          <div className="w-[20px] h-[40px] bg-primary rounded-[4px]"></div>
          <h3>{topTitle}</h3>
        </div>
      )}
      <div className="flex justify-between flex-col md:flex-row md:items-end">
        <div className="flex md:items-end gap-9 lg:gap-21.75 flex-col sm:flex-row">
          {bottomTitle && (
            <h1 className="text-[36px] font-semibold">{bottomTitle}</h1>
          )}

          {hasCountDown && <SectionHeaderCountdown />}
        </div>

        {arows && (
          <div className="flex gap-2">
            <Button
              size="icon-lg"
              className="bg-secondary text-secondary-foreground"
              onClick={leftClick}
            >
              <LeftArrow className="size-6 stroke-[1.5px]" />
            </Button>

            <Button
              size="icon-lg"
              className="bg-secondary text-secondary-foreground"
              onClick={rightClick}
            >
              <RightArrow className="size-6 stroke-[1.5px]" />
            </Button>
          </div>
        )}
        {buttonVarient === "primary" && (
          <Button variant={"default"} onClick={buttonClickHandler}>
            {buttonText}
          </Button>
        )}
        {buttonVarient === "secondary" && (
          <Button
            onClick={buttonClickHandler}
            variant={buttonVarient}
            className={"text-secondary-foreground "}
            size="lg"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
}

export default SectionHeader;
