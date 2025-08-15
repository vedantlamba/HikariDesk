import { Highlighter } from "@/components/magicui/highlighter";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Safari } from "@/components/magicui/safari";
import Image from "next/image";
import React from "react";

function LandingHero() {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center py-10 md:py-20 px-4 relative">
        <div>
          <div className="hidden lg:block absolute top-30 lg:left-40 -rotate-6 animate-float ">
            <GlobalUsers />
          </div>
          <div className="hidden lg:block absolute top-30 lg:right-40 rotate-6 animate-float">
            <BoostProductivity />
          </div>
          <div className="hidden lg:block absolute top-80 lg:left-40 rotate-6 animate-float2">
            <InstantReplies />
          </div>
          <div className="hidden lg:block absolute top-80 lg:right-40 -rotate-6 animate-float2">
            <TicketResolved />
          </div>
        </div>
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 px-3 py-2 text-sm font-medium bg-white dark:bg-gray-800">
            <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded text-xs font-bold">
              Y
            </span>
            Backed by YCombinator
          </span>
        </div>
        <h1 className="max-w-3xl text-4xl sm:text-5xl font-light md:tracking-wide md:text-balance md:leading-14">
          Manage customer support and tickets{" "}
          {/* <Highlighter action="underline" color=""> */} while you
          <span className="text-white">
            {" "}
            <Highlighter action="highlight" color="#FF9800">
              Focus
            </Highlighter>{" "}
          </span>
          {/* </Highlighter>{" "} */}
        </h1>
        <p className="mt-6 max-w-xl text-sm md:text-lg text-muted-foreground dark:text-gray-300 text-balance">
          Our AI-powered help desk platform handles tickets, chats, and FAQs
          automatically. Give your team more time to focus on growth while we
          keep your customers happy 24/7.
        </p>
        <div className="mt-8">
          {/* <a
          href="#"
          className="inline-flex items-center px-6 py-3 rounded-md bg-black text-white text-lg font-medium hover:bg-gray-800 transition-colors"
          > */}
          <RainbowButton>Get Started</RainbowButton>
          {/* </a> */}
        </div>
      </section>
      <section>
        <div className="relative flex justify-center items-center px-4 md:px-0">
          <Safari
            url="magicui.design"
            className="w-full max-w-md md:max-w-none"
            videoSrc="https://videos.pexels.com/video-files/3115209/3115209-uhd_2560_1440_25fps.mp4"
          />
        </div>
      </section>
    </>
  );
}

export default LandingHero;

export const GlobalUsers = () => {
  return (
    <div>
      <div className="inline-flex items-center gap-2 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full px-4 py-2 ">
        <div className="flex -space-x-2">
          <img
            src="/icons/p1.jpg"
            alt="User 1"
            className="h-8 w-8 rounded-full border border-white object-cover"
          />
          <img
            src="/icons/p2.jpg"
            alt="User 2"
            className="h-8 w-8 rounded-full border border-white object-cover"
          />
          <img
            src="/icons/p3.jpg"
            alt="User 3"
            className="h-8 w-8 rounded-full border border-white object-cover"
          />
        </div>

        <span className="text-sm font-medium ">Trusted by users globally</span>
      </div>
    </div>
  );
};

export const BoostProductivity = () => {
  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-orange-500">
        <img src="/icons/rocket.png" alt="rocket" className="h-3 w-3" />
      </div>
      <span className="text-sm font-medium whitespace-nowrap">
        Boost Productivity
      </span>
    </div>
  );
};

export const InstantReplies = () => {
  return (
    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 shadow-[0_8px_30px_rgba(0,0,0,0.12)] px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center h-6 w-6 rounded-full bg-sky-500">
        <img src="/icons/chat-bot.png" alt="rocket" className="h-3 w-3" />
      </div>
      <span className="text-sm font-medium whitespace-nowrap">
        Instant Replies
      </span>
    </div>
  );
};

export const TicketResolved = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] transform rotate-[-3deg] w-40">
      <p className="text-xs text-gray-500">Tickets Resolved</p>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-2xl font-semibold">248</span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-600 font-medium">
          +320%
        </span>
      </div>
    </div>
  );
};
