import React from "react";
import Image from "next/image";

function BestFeatures() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden pb-32">
      <span className="py-2 px-4 border  rounded-full flex justify-center items-center gap-2 text-center ">
        {" "}
        <img src="/logo.png" alt="" className="rounded-full h-4 w-4" /> Our best
        features
      </span>
      <h2 className="pb-10 md:pb-20 pt-5 text-3xl md:text-5xl font-semibold text-center px-2 text-balance max-w-4xl ">
        Your go-to assistant, saves you hours of time
      </h2>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl px-4 gap-4">
          <div className="md:col-span-2">
            <img
              src="/magicInAction/i1.jpg"
              alt=""
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
          <div>
            <img
              src="/magicInAction/i2.jpg"
              alt=""
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl px-4 gap-4 mt-4">
          <div>
            <img
              src="/magicInAction/i3.jpg"
              alt=""
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
          <div className="md:col-span-2">
            <img
              src="/magicInAction/i1.jpg"
              alt=""
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestFeatures;
