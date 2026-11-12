import NavBar from "./NavBar";
import NavMenu from "./NavMenu ";
import CartButton from "./CartButton";
import WishListButton from "./WishListButton";
import AcountMenu from "./AcountMenu";
import SearchInput from "./SearchInput";

function BottomHeader({ products, setSearchValue, loggedUser, setLoggedUser }) {
  return (
    <>
      <header className="flex justify-center w-full pt-12 pb-4 border-b-2 border-[#000000]/30 bg-background sticky top-0 z-2 ">
        <div className="w-[95%] lg:w-[81.25%]  flex justify-between gap-3">
          <NavMenu />
          <h1 className="hidden sm:block text-2xl font-bold font-inter ">
            Exclusive
          </h1>
          <NavBar loggedUser={loggedUser} />
          <div className="flex items-center gap-1 sm:gap-4">
            <SearchInput setSearchValue={setSearchValue} />
            <div className="flex gap-2 sm:gap-4 items-center justify-end">
              <WishListButton products={products} />
              <CartButton products={products} />
              {loggedUser && <AcountMenu setLoggedUser={setLoggedUser} />}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default BottomHeader;
