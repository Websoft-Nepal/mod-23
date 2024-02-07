function DiscountBanner() {
  return (
    <div className="bg-black flex flex-row h-10 text-white">
      <div className="mx-auto flex flex-row gap-10 w-1/2">
        <marquee className="flex flex-row gap-10 text-[10px] my-auto">
          <p className=" text-[13px] my-auto">
            ENJOY FREE DELIVERY INSIDE NEPAL ON ORDERS ABOVE RS 5000/- 5% OFF ON
            YOUR FIRST SIGN UP
          </p>
        </marquee>
      </div>
    </div>
  );
}

export default DiscountBanner;
