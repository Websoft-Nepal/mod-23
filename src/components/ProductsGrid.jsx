import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import ProudctCard from "./ProudctCard";
import product1 from "../assets/p1.jpeg";
import product2 from "../assets/p2.jpeg";
import product3 from "../assets/p3.jpeg";
import ViewBotton from "./misc/ViewBotton";

// Install Swiper modules
SwiperCore.use([Autoplay]);

function ProductGrid(props) {
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
    <div className="mx-32">
      <div className="flex flex-col justify-center mt-10">
        <h1 className="text-4xl font-light">{props.title}</h1>
      </div>
      <Swiper
        spaceBetween={20}
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        loop={true}
        className={`justify-center mt-10 grid grid-cols-6 gap-3 delay-[300ms] duration-[600ms] taos:translate-y-[-200px] taos:opacity-0 overflow-hidden mySwiper`}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="relative group">
            <ProudctCard
              id={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mx-auto">
        <ViewBotton />
      </div>
    </div>
  );
}

ProductGrid.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProductGrid;
