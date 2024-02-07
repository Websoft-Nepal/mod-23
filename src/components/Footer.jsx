import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import whiteLogo from "../assets/mode23.png";
import esewa from "../assets/esewa.png";
import khalti from "../assets/khalti.png";
import visa from "../assets/visa.png";

function Footer() {
  return (
    <div className="mt-28  text-white bg-black p-32 space-y-5">
      <div className="grid grid-cols-4 mb-20">
        <div className="space-y-5">
          <p>CUSTOMER SERVICE</p>
          <p>
            We Are 24-7 In touch. We deliver bar-setting customer care, and we
            are here to help YOU.
          </p>
          <div className="flex w-1/2 justify-between">
            <FaFacebookF />
            <BsInstagram />
            <FaTwitter />
            <FaTiktok />
            <FaYoutube />
          </div>
        </div>
        <div className="space-y-5">
          <p>Useful Links</p>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
        <div className="space-y-5">
          <p>Useful Links</p>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
        <div className="space-y-5">
          <p>Useful Links</p>
          <p>About Us</p>
          <p>FAQ</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className="bg-black text-white flex pt-20 border-t-2  border-gray-200 ">
        <div className="flex flex-col m-auto gap-y-10 text-center ">
          <div className="flex">
            <img src={esewa} className="mx-auto w-[100px] font-light text-md" />
            <img
              src={khalti}
              className="mx-auto w-[100px]  font-light text-md h-auto"
            />
            <img src={visa} className="mx-auto w-[100px]  font-light text-md" />
          </div>

          <img
            src={whiteLogo}
            className="mx-auto w-[150px] font-light text-md"
          />

          <div className="flex">
            <p>
              Copyright © 2021 Mode23. All Rights Reserved. Crafted by Imagio
              Creations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
