function SelectColor({ product, selectedColor, setSelectedColor }) {
  return (
    <>
      {product.color1 && (
        <div className="flex gap-[8px]">
          <label className="relative cursor-pointer">
            <input
              type="radio"
              name={product.name}
              value={product.color1}
              className="peer sr-only"
              checked={selectedColor === product.color1}
              onChange={() => setSelectedColor(product.color1)}
            />
            <span
              className={`block h-6 w-6 rounded-full peer-checked:scale-75 bg-[#DB4444] ${product.color1 === "darkgreen" && "peer-checked:bg-darkgreen"} ${product.color1 === "red" && "peer-checked:bg-red"} ${product.color1 === "yellow" && "peer-checked:bg-yellow"} ${product.color1 === "black" && "peer-checked:bg-black"} border border-gray-200 transition-all duration-200 hover:scale-110 peer-checked:ring-2 peer-checked:ring-offset-2`}
            ></span>
          </label>

          <label className="relative cursor-pointer">
            <input
              type="radio"
              name={product.id}
              value={product.color2}
              className="peer sr-only"
              checked={selectedColor === product.color2}
              onChange={() => setSelectedColor(product.color2)}
            />
            <span
              className={`block h-6 w-6 rounded-full peer-checked:scale-75 bg-[#DB4444] ${product.color2 === "darkgreen" && "peer-checked:bg-darkgreen"} ${product.color2 === "red" && "peer-checked:bg-red"} ${product.color2 === "brown" && "peer-checked:bg-brown"} border border-gray-200 transition-all duration-200 hover:scale-110 peer-checked:ring-2 peer-checked:ring-offset-2`}
            ></span>
          </label>
        </div>
      )}
    </>
  );
}

export default SelectColor;
