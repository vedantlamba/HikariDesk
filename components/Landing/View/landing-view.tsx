import React from "react";
import LandingNavbar from "../components/Navbar/landing-navbar";
import LandingHero from "../components/Hero/landing-hero";

function LandingView() {
  return (
    <div>
      <div>
        <LandingNavbar />
      </div>
      <div>
        <LandingHero />
      </div>
    </div>
  );
}

export default LandingView;
