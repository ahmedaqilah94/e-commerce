import { useTranslation } from "react-i18next";
import Card from "../card/Card";

function SearchResult({ products, setProducts, searchValue, loggedUser }) {
  const { t } = useTranslation();
  const filterdProducts = products.filter((product) =>
    product?.name?.toLowerCase().includes(searchValue.toLowerCase()),
  );
  if (!searchValue.trim().length) return null;
  return (
    <section className="flex flex-wrap justify-center py-[50px] mt-[10px] gap-[30px] bg-gray-50 shadow">
      {filterdProducts.length ? (
        filterdProducts.map((product) => {
          return (
            <Card
              key={product.id}
              product={product}
              propsSetProducts={setProducts}
              propsLoggedUser={loggedUser}
            />
          );
        })
      ) : (
        <h1 className="text-center text-3xl bg-muted text-muted-foreground rounded-2xl  leading-30 w-full">
          {t("No Results Found")}
        </h1>
      )}
    </section>
  );
}

export default SearchResult;
