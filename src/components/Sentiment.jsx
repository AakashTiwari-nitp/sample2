import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";

const SentimentSection = () => {
  return (
    <div className="bg-[#fff] rounded-md text-black px-10 py-5 my-3 mx-5 md:w-[70%] mb-5">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          Sentiment
        </h2>
      </div>

      {/* Key Events Section */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-[#44475B] font-semibold">Key Events</h3>
          <FaInfoCircle className="text-gray-400" size={16} />
        </div>

        {/* Scrollable Events Container */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide flex-shrink-0">
            {/* Event Card 1 */}
            <div className="min-w-[300px] md:min-w-[400px] bg-[#E8F4FD] rounded-lg p-4 flex gap-3">
              <div className="flex-shrink-0">
                <div className="bg-blue-600 rounded-full p-2.5">
                  <IoNewspaper className="text-white" size={20} />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#191C1F] text-sm md:text-base mb-2">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </h4>
                <p className="text-[#3E5765] text-xs md:text-sm">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum.
                </p>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="min-w-[300px] md:min-w-[400px] bg-[#EBF9F4] rounded-lg p-4 flex gap-3">
              <div className="flex-shrink-0">
                <div className="bg-green-500 rounded-full p-2.5">
                  <BsGraphUpArrow className="text-white" size={20} />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#191C1F] text-sm md:text-base mb-2">
                  Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim
                  mattis enim tincidunt.
                </h4>
                <p className="text-[#3E5765] text-xs md:text-sm">
                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est
                  faucibus metus quis. Amet sapien quam viverra adipiscing
                  condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analyst Estimates Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-[#44475B] font-semibold">Analyst Estimates</h3>
          <FaInfoCircle className="text-gray-400" size={16} />
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 md:items-center">
          {/* Percentage Circle */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#EBF9F4] flex items-center justify-center">
              <span className="text-[#0FBA83] text-2xl md:text-3xl font-semibold">
                76%
              </span>
            </div>
          </div>

          {/* Progress Bars */}
          <div className="flex-grow max-w-md">
            {/* Buy */}
            <div className="flex items-center gap-4 mb-3">
              <span className="text-sm text-gray-600 w-12">Buy</span>
              <div className="flex-grow bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-green-500 h-full rounded-full"
                  style={{ width: "76%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-12">76%</span>
            </div>

            {/* Hold */}
            <div className="flex items-center gap-4 mb-3">
              <span className="text-sm text-gray-600 w-12">Hold</span>
              <div className="flex-grow bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-gray-400 h-full rounded-full"
                  style={{ width: "8%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-12">8%</span>
            </div>

            {/* Sell */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600 w-12">Sell</span>
              <div className="flex-grow bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-red-500 h-full rounded-full"
                  style={{ width: "16%" }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 w-12">16%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentSection;
