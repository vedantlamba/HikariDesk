import { StickyBanner } from "@/components/ui/sticky-banner";
import React from "react";

function Banner() {
  return (
    <div>
      <div className="hidden md:block">
        <StickyBanner className="bg-gradient-to-b from-orange-500 to-orange-600">
          <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
            HikariDesk is in development! Follow my progress on{" "}
            <a href="https://x.com/Vedantlamba" target="_blank" className="transition duration-200 hover:underline">Twitter</a>{" "}
            and explore this landing page for now.
          </p>
        </StickyBanner>
      </div>
      <div className="md:hidden">
        <StickyBanner className="bg-gradient-to-b from-orange-500 to-orange-600">
          <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
            HikariDesk is in development!
          </p>
        </StickyBanner>
      </div>
    </div>
  );
}

export default Banner;
