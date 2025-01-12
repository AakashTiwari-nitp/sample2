import React from "react";
import Image from "next/image";
import JohnSmith from "../../public/JohnSmith.png";
import ElinaWilliams from "../../public/ElinaWilliams.png";
import johnSmith2 from "../../public/johnSmith2.png";

const Team = () => {
  return (
    <>
      <div className="bg-[#fff] rounded-md text-black px-10 py-5 my-3 mx-5 md:w-[70%] mb-5">
        <section>
          <h1 className="text-2xl font-bold mb-4">Team</h1>

          <div className="space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing
                arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor
                id pretium quam. Facilisis purus convallis quam augue.
              </p>
            </div>

            <div className="bg-[#E8F4FD] rounded-md p-2 px-5 flex flex-col md:flex-row items-center gap-8">
              <div className="w-128 h-128 shrink-0">
                <Image
                  className="rounded-md"
                  height={120}
                  src={JohnSmith}
                  alt="img"
                />
                <h2 className="text-center">John Smith</h2>
                <h3 className="text-center text-sm text-[#64748B]">
                  Designation here
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
                fermentum ut libero hendrerit id. Tellus sit ornare netus
                sagittis in nunc convallis mattis maecenas. Tempus arcu leo
                sociis laoreet nec neque sed pellentesque viverra. Consectetur
                proin amet ut id facilisi quis consectetur. Tellus gravida
                ultricies feugiat sed eu egestas dolor est ipsum. Malesuada
                etiam mi gravida praesent interdu
              </p>
            </div>
            <div className="bg-[#E8F4FD] rounded-md p-2 px-5 flex flex-col md:flex-row items-center gap-8">
              <div className="w-128 h-128 shrink-0">
                <Image
                  className="rounded-md"
                  height={120}
                  src={ElinaWilliams}
                  alt="img"
                />
                <h2 className="text-center">Elina Williams</h2>
                <h3 className="text-center text-sm text-[#64748B]">
                  Designation here
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
                fermentum ut libero hendrerit id. Tellus sit ornare netus
                sagittis in nunc convallis mattis maecenas. Tempus arcu leo
                sociis laoreet nec neque sed pellentesque viverra. Consectetur
                proin amet ut id facilisi quis consectetur. Tellus gravida
                ultricies feugiat sed eu egestas dolor est ipsum. Malesuada
                etiam mi gravida praesent interdu
              </p>
            </div>
            <div className="bg-[#E8F4FD] rounded-md p-2 px-5 flex flex-col md:flex-row items-center gap-8">
              <div className="w-128 h-128 shrink-0">
                <Image
                  className="rounded-md"
                  height={120}
                  src={johnSmith2}
                  alt="img"
                />
                <h2 className="text-center">John Smith</h2>
                <h3 className="text-center text-sm text-[#64748B]">
                  Designation here
                </h3>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
                fermentum ut libero hendrerit id. Tellus sit ornare netus
                sagittis in nunc convallis mattis maecenas. Tempus arcu leo
                sociis laoreet nec neque sed pellentesque viverra. Consectetur
                proin amet ut id facilisi quis consectetur. Tellus gravida
                ultricies feugiat sed eu egestas dolor est ipsum. Malesuada
                etiam mi gravida praesent interdu
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Team;
