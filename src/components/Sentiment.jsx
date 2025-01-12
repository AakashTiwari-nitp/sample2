import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";

const Sentimnet = () => {
  return (
    <>
      <div className="bg-[#fff] rounded-md text-black px-10 py-5 my-3 mx-5 md:w-[70%]">
        <h2 className="text-2xl font-bold mb-4">Sentiment</h2>
        <h3 className="text-[#44475B] flex items-center gap-1">
          Key Events
          <FaInfoCircle className="font-light" size={20} />
        </h3>
        <div className="flex gap-4 my-2 overflow-hidden flex-shrink-0">
          <div className="bg-[#E8F4FD] w-[60%] rounded-md p-5 flex flex-shrink-0 gap-2">
            <div className=" ">
              <div className="bg-blue-600 rounded-full p-3">
                <IoNewspaper className=" text-white" size={25} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-[#191C1F]">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </h3>
              <p className="text-[#3E5765]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                provident id explicabo voluptas. Sint, praesentium assumenda a
                eligendi, expedita maiores tenetur saepe enim.
              </p>
            </div>
          </div>
          <div className="bg-[#aae7cd] w-[60%] flex-shrink-0 rounded-md p-5 flex gap-2">
            <div className=" ">
              <div className="bg-green-600 rounded-full p-3">
                <BsGraphUpArrow className=" text-white" size={25} />
              </div>
            </div>
            <div>
              <h3 className="font-semibold">
                Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                mattis enim tincidunt.
              </h3>
              <p className="text-[#3E5765]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                provident id explicabo voluptas. Sint, praesentium assumenda a
                eligendi, expedita maiores tenetur saepe enim.
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-[#44475B] flex items-center gap-1">
          Analyst Estimates
          <FaInfoCircle className="font-light" size={20} />
        </h3>
        <div className="flex w-[70%] gap-4 items-center">
          <div className="rounded-full h-24 w-24 bg-[#EBF9F4] flex items-center justify-center text-2xl text-[#0FBA83]">
            76%
          </div>
          <div>
            <div className="flex items-center gap-4">
              <h3 className="w-16">Buy</h3>
              <progress
                className="h-2 flex-1 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-emerald-500 [&::-moz-progress-bar]:bg-emerald-500"
                value={76}
                max={100}
              />
            </div>

            <div className="flex items-center gap-4">
              <h3 className="w-16">Hold</h3>
              <progress
                className="h-2 flex-1 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-blue-500 [&::-moz-progress-bar]:bg-blue-500"
                value={76}
                max={100}
              />
            </div>

            <div className="flex items-center gap-4">
              <h3 className="w-16">Sell</h3>
              <progress
                className="h-2 flex-1 [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-value]:bg-purple-500 [&::-moz-progress-bar]:bg-purple-500"
                value={76}
                max={100}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sentimnet;
