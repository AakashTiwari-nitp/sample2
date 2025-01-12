import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import profits from "../../public/profits.png";
import calculate from "../../public/calculate.png";

const AboutBitcoin = () => {
  return (
    <>
      <div className="bg-[#fff] rounded-md text-black px-10 py-5 my-3 mx-5 md:w-[70%]">
        <section>
          <h1 className="text-2xl font-bold mb-4">About Bitcoin</h1>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">What is Bitcoin?</h2>
              <p className="text-gray-700">
                Bitcoin's price today is US$16,951.82, with a 24-hour trading
                volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
                currently -7.70% from its 7-day all-time high of $18,366.66, and
                3.40% from its 7-day all-time low of $16,394.75. BTC has a
                circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
                lobortis tristique pharetra. Diam id et lectus urna et tellus
                aliquam dictum at. Viverra diam suspendisse enim facilisi diam
                ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
                sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus.
              </p>
              <p className="text-gray-700 mb-4">
                Diam praesent massa dapibus magna aliquam a dictumst volutpat.
                Egestas vitae pellentesque auctor amet. Nunc sagittis libero
                adipiscing cursus felis pellentesque interdum. Odio cursus
                phasellus velit in senectus enim dui. Turpis tristique placerat
                interdum sed volutpat. Id imperdiet magna eget eros donec cursus
                nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
                Integer dignissim augue viverra nulla et quis lobortis
                phasellus. Integer pellentesque enim convallis ultricies at.
              </p>
              <p className="text-gray-700">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                aliquam massa vel convallis duis ac. Mi adipiscing semper
                scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                tincidunt volutpat in eget. Ullamcorper dui
              </p>
            </div>
          </div>
        </section>

        <hr className="my-2" />

        <section>
          <h2 className="text-2xl font-bold mb-6">Already Holding Bitcoin?</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-[#79F1A4] to-[#0E5CAD] rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="">
                  <Image
                    src={profits}
                    alt="Trading chart"
                    height={150}
                    width={150}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Calculate your Profits
                  </h3>
                  <button className="mt-2 bg-white text-emerald-700 px-4 py-2 rounded flex items-center gap-2 text-sm">
                    Check Now
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#FF9865] to-[#EF3031] rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="">
                  <Image
                    src={calculate}
                    height={150}
                    width={150}
                    alt="Tax calculator"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Calculate your tax liability
                  </h3>
                  <button className="mt-2 bg-white text-red-700 px-4 py-2 rounded flex items-center gap-2 text-sm">
                    Check Now
                    <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-2" />

          <p className="mt-6 text-gray-700">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutBitcoin;
