import { Link } from "react-router-dom";
import { Menu as MenuIcon } from "lucide-react";
import { Button } from "react-aria-components";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

function NaveMenu() {
  const { t } = useTranslation();
  return (
    <div className="flex items-start lg:hidden">
      <DropdownMenuTrigger>
        <Button className="cursor-pointer" aria-label="Open navigation menu">
          <MenuIcon size={24} />
        </Button>

        <DropdownMenu
          className=" w-40 backdrop-blur-[150px]"
          placement="bottom end"
        >
          <DropdownMenuItem>
            <Link to="/" className="block w-full">
              {t("Home")}
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link to="/contact" className="block w-full">
              {t("Contact")}
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link to="/about" className="block w-full">
              {t("About")}
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link to="/signup" className="block w-full">
              {t("Sign Up")}
            </Link>
          </DropdownMenuItem>
        </DropdownMenu>
      </DropdownMenuTrigger>
    </div>
  );
}

export default NaveMenu;
