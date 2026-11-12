import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ErrorPage() {
  const { t } = useTranslation();
  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-[95%] lg:w-[81.25%] mt-[80px]">
        <header>
          <nav className="my-[80px] text-[#000000]/50 flex gap-[12px]">
            <Link to="/">{t("Home")}</Link>
            <span>/</span>

            <a href="#" className="text-foreground">
              404 {t("Error")}
            </a>
          </nav>
        </header>
        <container className="my-[140px] self-center flex flex-col items-center">
          <h1 className="text-[110px] tracking-[3%] leading-[115px] font-medium font-inter">
            404 {t("Not Found")}
          </h1>
          <p className="mt-[40px]">
            {t("Your visited page not found. You may go home page.")}
          </p>
          <Button to="/" className="px-0 mt-[80px] cursor-pointer">
            <Link className="px-[48px]">Back to home page</Link>
          </Button>
        </container>
      </div>
    </main>
  );
}

export default ErrorPage;
