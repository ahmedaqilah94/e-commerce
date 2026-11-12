import FooterSection from "@/components/footerSection/FooterSection";
import BottomHeader from "@/components/header/BottomHeader";
import SearchResult from "@/components/header/SearchResult";
import TopHeader from "@/components/header/TopHeader";
import { useFetchData } from "@/data";
import { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

function Layer() {
  const [products, setProducts] = useState(useFetchData());
  const [searchValue, setSearchValue] = useState("");
  const [loggedUser, setLoggedUser] = useState(
    () =>
      JSON.parse(localStorage.getItem("users"))?.find((user) => user.isLogin) ||
      null,
  );

  return (
    <div>
      <ScrollRestoration />
      <TopHeader />
      <BottomHeader
        products={products}
        setSearchValue={setSearchValue}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
      />
      <SearchResult
        products={products}
        setProducts={setProducts}
        searchValue={searchValue}
        loggedUser={loggedUser}
      />
      <div className=" flex items-center w-full flex-col">
        <Outlet
          context={{ products, setProducts, setLoggedUser, loggedUser }}
        />
      </div>
      <FooterSection />
    </div>
  );
}

export default Layer;
