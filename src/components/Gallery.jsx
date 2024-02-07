import banner from "../assets/banner.mp4";
import product1 from "../assets/p10.jpg";
import product2 from "../assets/p2.jpeg";
import product3 from "../assets/p3.jpeg";
import ProudctCard from "./ProudctCard";
import ViewBotton from "./misc/ViewBotton";

function Gallery() {
  const products = [
    {
      id: 1,
      name: "Fluffy Blue Balacalava Hoodie",
      price: 4950,
      image: product1,
    },
    {
      id: 2,
      name: "Ivy Gold Fur Jacket",
      price: 4150,
      image: product2,
    },
    {
      id: 3,
      name: "Ritzy Vintage Hoodie",
      price: 3100,
      image: product3,
    },
    {
      id: 4,
      name: "Fluffy Gray Balacalava Hoodie",
      price: 4950,
      image: product1,
    },
    {
      id: 5,
      name: "Ivy Silver Fur Jacket",
      price: 4150,
      image: product2,
    },
    {
      id: 6,
      name: "Ritzy Vintage",
      price: 3100,
      image: product3,
    },
  ];
  return (
    <div className="w-full px-32 mt-28 flex flex-col">
      <div className=" flex">
        <div className="gap-x-8 flex justify-between font-medium text-[12px] ml-auto">
          <button>
            <p className="tracking-[0.1em]">ALL</p>
          </button>
          <button>
            <p className="tracking-[0.1em]">GRAPHIC TEE</p>
          </button>
          <button>
            <p className="tracking-[0.1em]">BAG AND ACCESSORIES</p>
          </button>
          <button>
            <p className="tracking-[0.1em]">HODDIE AND SWEATSHIRT</p>
          </button>
        </div>
      </div>

      <div className=" flex gap-10 mt-10">
        <div className="h-full ">
          <video width="600" autoPlay="autoplay" muted loop={true}>
            <source src={banner} type="video/mp4" />
          </video>
        </div>
        <div className="w-2/3">
          <div
            className={` justify-center grid grid-flow-row grid-cols-3 gap-3 delay-[300ms] duration-[600ms] taos:translate-y-[-200px] taos:opacity-0 overflow-hidden`}
          >
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <ProudctCard
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                />
              </div>
            ))}
          </div>
          <div className="w-full mt-8">
            <ViewBotton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
