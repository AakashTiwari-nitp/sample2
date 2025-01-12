import React from "react";
import Image from "next/image";
import gettingStarted from "../../public/gettingStarted.png";
import { FaArrowRight } from "react-icons/fa";

const GettingStarted = () => {
  return (
    <>
      <div className="bg-[#0052FE] px-10 py-5 md:w-[35%] lg:w-[30%] rounded-md my-3 mx-5 flex flex-col items-center">
        <Image
          height={150}
          width={150}
          src={gettingStarted}
          alt="getting Started"
        />
        <h2 className="text-xl font-bold">Get Started with KoinX for FREE</h2>
        <p className="px-4 my-2 text-sm">
          With our range of features that you can equip for free, KoinX allows
          you to be more educated and aware of your tax reports.
        </p>
        <button className="flex items-center gap-2 w-64 my-2 mx-5 px-4 py-2 rounded-md bg-white text-black text-center">
          Get Started for FREE <FaArrowRight size={20} />
        </button>
      </div>
    </>
  );
};

export default GettingStarted;
