import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-aria-components";
import { useTranslation } from "react-i18next";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CircleX, LogOut, ShoppingBag, Star, User } from "lucide-react";
import { fetchUsers, saveToDB } from "@/data";

function AcountMenu({ setLoggedUser }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const users = fetchUsers();

  const logOutHandler = () => {
    const newUpdate = users.map(
      (user) => (user.isLogin ? { ...user, isLogin: false } : user),
      navigate("/"),
    );
    saveToDB("users", newUpdate);
    setLoggedUser(newUpdate.name);
  };
  return (
    <DropdownMenuTrigger>
      <Button className="cursor-pointer" aria-label="Open navigation menu">
        <div className="size-8 bg-primary rounded-[50%] flex justify-center items-center">
          <User className="size-6 stroke-[1.5px] text-primary-foreground" />
        </div>
      </Button>

      <DropdownMenu
        className="w-56 backdrop-blur-[150px] "
        placement="bottom end"
      >
        <DropdownMenuItem>
          <Link
            to="/acount"
            className=" w-full flex items-center text-[14px] text-[#FAFAFA]  gap-4 py-0.5"
          >
            <User className="size-6 stroke-[1.5px]" />
            {t("Manage My Account")}
          </Link>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <button className=" w-full flex items-center text-[14px] text-[#FAFAFA] gap-4 py-0.5">
            <ShoppingBag className="size-6 stroke-[1.5px]" />
            {t("My Order")}
          </button>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <button className=" w-full flex items-center text-[14px] text-[#FAFAFA] gap-4 py-0.5">
            <CircleX className="size-6 stroke-[1.5px]" />
            {t("My Cancellations")}
          </button>
        </DropdownMenuItem>

        <DropdownMenuItem>
          <button className=" w-full flex items-center text-[14px] text-[#FAFAFA] gap-4 py-0.5">
            <Star className="size-6 stroke-[1.5px]" />
            {t("My Reviews")}
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            className=" w-full flex items-center text-[14px] text-[#FAFAFA] gap-4 py-0.5"
            onClick={logOutHandler}
          >
            <LogOut className="size-6 stroke-[1.5px]" />
            {t("Logout")}
          </button>
        </DropdownMenuItem>
      </DropdownMenu>
    </DropdownMenuTrigger>
  );
}

export default AcountMenu;
