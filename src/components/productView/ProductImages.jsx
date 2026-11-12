function ProductImages({ product, selectedColor }) {
  return (
    <section className="flex flex-col md:flex-row gap-[30px] lg:w-[60%]">
      <div className="flex flex-wrap md:flex-col gap-[16px] ">
        <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center p-[15px]">
          <img
            src={
              selectedColor === product.color1 ? product.image : product.image2
            }
            alt={product.name}
          />
        </div>
        <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center p-[15px]">
          <img
            src={
              selectedColor === product.color1 ? product.image : product.image2
            }
            alt={product.name}
          />
        </div>
        <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center p-[15px]">
          <img
            src={
              selectedColor === product.color1 ? product.image : product.image2
            }
            alt={product.name}
          />
        </div>
        <div className="w-[170px] h-[138px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center p-[15px]">
          <img
            src={
              selectedColor === product.color1 ? product.image : product.image2
            }
            alt={product.name}
          />
        </div>
      </div>
      <div className="md:w-[500px] h-[600px] bg-[#F5F5F5] rounded-[4px] flex items-center justify-center p-[15px]">
        <img
          className="size-[90%]"
          src={
            selectedColor === product.color1 ? product.image : product.image2
          }
          alt={product.name}
        />
      </div>
    </section>
  );
}

export default ProductImages;
