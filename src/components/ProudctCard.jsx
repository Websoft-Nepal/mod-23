import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

function ProductCard({ id, name, image, price }) {
  const [isHovered, setIsHovered] = useState();
  AOS.init();
  const handleHover = (id) => {
    setIsHovered(id);
  };

  return (
    <div
      data-aos="slide-down"
      data-aos-delay="50"
      data-aos-duration="500"
      data-aos-easing="linear"
      data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top"
    >
      <div
        onMouseEnter={() => handleHover(id)}
        onMouseLeave={() => setIsHovered(null)}
        className="relative group"
      >
        <div className="relative">
          <div className="overflow-hidden">
            <div
              //   className="absolute w-full top-0 bottom-28  bg-black opacity-25 duration-700 ease-out "
              className={` ${
                isHovered === id
                  ? "bg-black opacity-25 duration-700 ease-out"
                  : ""
              } absolute w-full top-0 bottom-28    `}
            ></div>
            <img
              loading="lazy"
              src={image}
              alt="Product Image"
              className={`${
                isHovered === id ? "scale-110 ease-in-out duration-700" : ""
              }    `}
            />
          </div>
          {isHovered === id && (
            <>
              <button className=" absolute bottom-0 p-4  bg-white bg-opacity-30 backdrop-blur-lg w-full text-black font-light tracking-[0.2em]">
                ORDER NOW
              </button>
            </>
          )}
        </div>
        <div className="text-[16px] mt-5 tracking-[0.1em]">
          <p>{name}</p>
          <p>Rs.{price}</p>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
};

export default ProductCard;
