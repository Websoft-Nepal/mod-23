import image1 from "../assets/p13.jpeg";
function NewsLetter() {
  return (
    <div className="flex flex-row mt-32 mx-32">
      <div className="w-1/2">
        <img
          src={image1}
          alt="winter collection"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="bg-black text-white w-1/2 flex ">
        <div className="flex flex-col m-auto gap-y-10 text-center ">
          <p className="mx-auto text-xl tracking-[0.3em] w-2/3">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <p className="mx-auto w-2/3 tracking-widest font-light">
            Subscribe and get the latest updates on the new arrivals
          </p>
          <input
            type="text"
            placeholder="Enter your email"
            className="px-2 py-3 mx-auto border-2 w-full font-light text-md"
          />

          <div className="flex">
            <button className=" p-4 px-9 border-2 hover:border-black hover:bg-white border-white text-white bg-black duration-300 bg-opacity-30 backdrop-blur-lg mx-auto hover:text-black font-light tracking-[0.2em]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
