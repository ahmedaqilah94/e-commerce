import { X } from "lucide-react";
import { useOutletContext } from "react-router-dom";
import { updateProduct } from "@/data";
import { Button } from "../ui/button";

function CartCard({ product }) {
  const { setProducts } = useOutletContext();

  const subTotalPrice = Number(product.currentPrice) * Number(product.inCart);

  const handelValue = (e) => {
    const value = e.target.value;
    updateProduct(product.id, setProducts, { inCart: value });
  };

  const removeProductHandler = () => {
    updateProduct(product.id, setProducts, { inCart: 0 });
  };
  return (
    <tr
      key={product.id}
      className=" shadow-[0_1px_13px_0_rgba(0,0,0,0.05)] rounded-[4px]"
    >
      <td className=" flex items-center gap-[20px] ps-[30px] group py-[24px]">
        <div className="size-[54px] flex justify-center items-center group relative">
          <img src={product.image} alt={product.name} className="" />
          <Button
            size="icon-xs"
            onClick={removeProductHandler}
            className="absolute -top-1 right-11.5 hidden group-hover:flex"
          >
            <X className="stroke-[2px] size-[11px] " />
          </Button>
        </div>
        <h4>{product.name}</h4>
      </td>

      <td>${product.currentPrice}</td>

      <td>
        <input
          type="number"
          onChange={handelValue}
          value={product.inCart}
          min="1"
          className="border rounded-[4px] px-[12px] w-[72px] h-[44px] "
        />
      </td>
      <td className="hidden sm:table-cell">${subTotalPrice}</td>
    </tr>
  );
}

export default CartCard;
