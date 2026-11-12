import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "react-aria-components";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function LanguageDropDown() {
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);

    const direction = lang === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = lang;
    document.documentElement.dir = direction;

    if (lang === "ar") {
      setCurrentLanguage(t("Arabic"));
    } else if (lang === "de") {
      setCurrentLanguage(t("Deutsch"));
    } else {
      setCurrentLanguage(t("English"));
    }

    localStorage.setItem("lang", JSON.stringify(lang));
  };
  useEffect(() => {
    changeLanguage(JSON.parse(localStorage.getItem("lang")));
  }, []);

  return (
    <div className=" flex items-center">
      <DropdownMenuTrigger>
        <Button
          variant="outline"
          className="text-white text-[14px] flex items-center gap-2.5"
        >
          {currentLanguage} <ChevronDown className="mr-2 h-5 w-5" />
        </Button>

        <DropdownMenu
          className="w-35 backdrop-blur-[150px]"
          placement="bottom start"
        >
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => changeLanguage("en")}>
              {t("English")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLanguage("ar")}>
              {t("Arabic")}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => changeLanguage("de")}>
              {t("Deutsch")}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenu>
      </DropdownMenuTrigger>
    </div>
  );
}

export default LanguageDropDown;
