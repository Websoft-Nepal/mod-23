import { useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

function Modal() {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center tracking-[0.1em] bg-black bg-opacity-50 z-20 ">
          <div className="  flex flex-col fixed  justify-center items-center">
            <div className="bg-black p-8 border-[12px] border-white text-white w-[380px]">
              <div className=" absolute right-0 -top-10">
                <button onClick={closeModal}>
                  <IoIosCloseCircle className=" text-black text-[40px]" />
                </button>
              </div>
              <div className="text-lg font-bold mb-8 text-[14px] space-y-2">
                <p>GET 5% OFF ON YOUR FIRST </p>
                <p>SIGN UP</p>
              </div>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-slate-100  w-full text-black  hover:bg-gray-600 font-light tracking-[0.2em]"
              >
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
