import React from "react";
import PricingCards from "./components/pricing-cards";

function Pricing() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden pb-32 pt-10">
      <span className="py-2 px-4 border  rounded-full flex justify-center items-center gap-2 text-center ">
        {" "}
        <img src="/logo.png" alt="" className="rounded-full h-4 w-4" /> Pricing
        & Plans
      </span>
      <h2 className="pb-2 md:pb-5 pt-5 text-3xl md:text-5xl font-semibold text-center px-2 text-balance">
        Choose the perfect plan
      </h2>
      <div className="pt-5">
        <PricingCards />
      </div>
    </div>
  );
}

export default Pricing;
