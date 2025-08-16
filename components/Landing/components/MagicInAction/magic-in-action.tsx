import Image from "next/image";
import React from "react";

function MagicInAction() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden md:py-20">
      <h2 className="pb-10 md:pb-20 text-3xl md:text-6xl font-semibold text-center px-2 text-balance">
        See the magic in action!
      </h2>
      {/* First Section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-32 max-w-7xl px-4 pb-16 md:pb-32">
        <div className="relative w-full h-[250px] lg:w-[600px] md:h-[350px]">
          <Image
            src="/magicInAction/i1.jpg"
            alt="Email summary demo"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

        <div>
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white pb-7 text-balance">
            Summarize long email threads & reply instantly
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Quickly understand lengthy email chains with AI-powered summaries
            and easily dictate and send replies. Save time, stay productive, and
            never miss important details again.
          </p>
        </div>
      </div>
      {/* Second Section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-32 max-w-7xl px-4 pb-16 md:pb-32">
        <div>
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white pb-7 text-balance">
            Find the location of a meeting
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Never miss your interviews or meetings. Automatically fetch meeting
            location or Google Meet links from your calendar or inbox right when
            you need them.
          </p>
        </div>
        <div className="relative w-full h-[250px] lg:w-[600px] md:h-[350px]">
          <Image
            src="/magicInAction/i2.jpg"
            alt="Email summary demo"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </div>
      {/* Third Section  */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-32 max-w-7xl px-4 pb-16 md:pb-32">
        <div className="relative w-full h-[250px] lg:w-[600px] md:h-[350px]">
          <Image
            src="/magicInAction/i3.jpg"
            alt="Email summary demo"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>

        <div>
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white pb-7 text-balance">
            Delete all promotional emails
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Declutter your inbox easily. Instantly clean out thousands of
            promotional emails so you can focus on important job updates and
            conversations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MagicInAction;
