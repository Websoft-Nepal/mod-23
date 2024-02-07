import image1 from "../assets/p11.jpeg";
import image2 from "../assets/p12.jpeg";
function Sale() {
  return (
    <div className="mt-10 mx-32 h-[500px]">
      <div className="h-[500px] relative flex gap-x-4 ">
        <div className="w-1/2 relative">
          <div className="absolute bg-black opacity-15 w-full h-full "></div>
          <img
            src={image1}
            alt="sale image"
            className="w-full h-full object-cover"
          />
          <div className="absolute bg-white px-16 py-3  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="tracking-[0.1em] text-sm font-light text-center">
              VIEW
            </p>
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="absolute bg-black opacity-15 w-full h-full "></div>

          <img
            src={image2}
            alt="sale image"
            className="w-full h-full object-cover "
          />
          <div className="absolute bg-white px-16 py-3  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="tracking-[0.1em] text-sm font-light text-center">
              VIEW
            </p>
          </div>
        </div>
        <div className="absolute  border-2 p-2 border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className=" bg-white text-black p-9">
            <p className="tracking-[0.5em] text-3xl font-medium text-center">
              SALE
            </p>
            <p className="tracking-[0.3em] text-lg font-thin ">
              #END OF SEASON
            </p>
          </div>
        </div>
        <div className="absolute  top-1/2 -translate-y-1/2 -rotate-90">
          <p className="tracking-[0.1em] text-xl text-white font-medium text-center">
            30%
          </p>
        </div>
        <div className="absolute  top-1/2  right-2 rotate-90">
          <p className="tracking-[0.1em] text-xl text-white font-medium text-center">
            60%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sale;
