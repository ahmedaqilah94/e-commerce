import { Search } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function SearchInput({ setSearchValue }) {
  const { t } = useTranslation();
  const SearchElement = useRef(null);

  const handelValue = (e) => {
    e.preventDefault();
    setSearchValue(SearchElement.current.value);
  };

  return (
    <form onSubmit={handelValue}>
      <input
        className="w-50 sm:w-60.75 placeholder:text-[12px] h-9.5 bg-input p-5 rounded-[4px] relative"
        type="text"
        placeholder={t("What are you looking for?")}
        ref={SearchElement}
      />
      <Search className="size-6 stroke-[1.5px] top-14 ms-43  sm:ms-53 absolute" />
    </form>
  );
}

export default SearchInput;
