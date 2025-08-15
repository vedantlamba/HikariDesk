import React from "react";
import LandingNavbar from "../components/Navbar/landing-navbar";
import LandingHero from "../components/Hero/landing-hero";
import TrustedBy from "../components/TrustedBy/trusted-by";

function LandingView() {
  return (
    <div>
      <div>
        <LandingNavbar />
      </div>
      <div>
        <LandingHero />
      </div>
      <div>
        <TrustedBy />
      </div>
    </div>
  );
}

export default LandingView;
