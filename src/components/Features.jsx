import paymentSvg from "../assets/payment.svg";
import returnImg from "../assets/return.png";
import deliveryImg from "../assets/delivery.png";

function Features() {
  return (
    <div className="mt-28 mx-32 grid grid-cols-3  justify-between text-center">
      <div className="mx-auto flex flex-col gap-y-4 w-2/3">
        <div className="mx-auto">
          <img src={paymentSvg} alt="" />
        </div>
        <p className="text-lg font-light tracking-[0.2em] ">PAYMENT</p>
        <p className="text-base font-light tracking-wide">
          Easy payment methods are available for your convenience.
        </p>
      </div>
      <div className="mx-auto flex flex-col gap-y-4 w-2/3 ">
        <div className="mx-auto">
          <img src={returnImg} alt="Return" className="w-[50px]" />
        </div>
        <p className="text-lg font-light tracking-[0.2em] ">RETURN</p>
        <p className="text-base font-light tracking-wide">
          Return your order easily with just one click.
        </p>
      </div>
      <div className="mx-auto flex flex-col gap-y-4 w-2/3  ">
        <div className="mx-auto">
          <img src={deliveryImg} alt="Delivery Truck" className="w-[50px]" />
        </div>
        <p className="text-lg font-light tracking-[0.2em] ">DELIVERY</p>
        <p className="text-base font-light tracking-wide">
          Delivery available for any location; domestic or international.
        </p>
      </div>
    </div>
  );
}

export default Features;
