import React from "react";
import BannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className=" container mx-auto flex justify-between items-center mt-8">
      <div className="flex-row space-y-8">
        <div className="space-y-4">
          <h2 className="font-extrabold text-4xl">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-indigo-600 bg-clip-text text-transparent">Development Stack</span>
          </h2>
          <p className="text-gray-500">
            Explore frontend, backend, database, and tooling options, <br />{" "}
            compare them side by side, and put together the stack that fits your{" "}
            <br /> next project.
          </p>
        </div>
        <div
          className="flex
        gap-3"
        >
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-5 py-3 rounded-lg p-2.5 rounded-2xl">
            Explore Technologies
          </button>
          <button className="bg-white text-black p-2.5 rounded-2xl">
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
