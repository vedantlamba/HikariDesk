import React from "react";
import ReviewsMarquee from "./components/reviews-marquee";
import { GlobalUsers } from "../Hero/landing-hero";

function CustomerReviews() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden pb-32">
      <span className="py-2 px-4 border  rounded-full flex justify-center items-center gap-2 text-center ">
        {" "}
        <img src="/logo.png" alt="" className="rounded-full h-4 w-4" /> Reviews
      </span>
      <h2 className="pb-2 md:pb-5 pt-5 text-3xl md:text-5xl font-semibold text-center px-2 text-balance">
        Customers love our app
      </h2>
      <p className="text-center text-balance font-light text-sm md:text-lg">
        Leaders using HikariDesk save 10+ hours every week on email and calendar
        management
      </p>
      <div className="pt-20 pb-5">
        <ReviewsMarquee />
      </div>
      <div>
        <GlobalUsers bgCol="bg-blue-500 text-white" />
      </div>
    </div>
  );
}

export default CustomerReviews;
