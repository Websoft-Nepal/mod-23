import logo from "./../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

function NavBar() {
  return (
    <div className="sticky top-0 bg-white z-20">
      <nav className=" h-[110px] flex border-b border-gray-200">
        <div className=" my-auto mx-32 w-full flex flex-row justify-between text-[16px] font-light">
          <div>
            <img src={logo} alt="logo" className="w-[120px] h-auto" />
          </div>
          <div className="w-1/2 my-auto flex justify-between tracking-[0.2em]">
            <p>SHOP</p>
            <p>SALE</p>
            <p>FAQ</p>
            <p>CONTACT US</p>
            <div className="flex gap-7 text-[18px] ">
              <IoSearch />
              <FaRegUser />
              <FaRegHeart />
              <MdOutlineShoppingCart />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
