import React from "react";
import LandingNavbar from "../components/Navbar/landing-navbar";
import LandingHero from "../components/Hero/landing-hero";
import TrustedBy from "../components/TrustedBy/trusted-by";
import MagicInAction from "../components/MagicInAction/magic-in-action";
import BestFeatures from "../components/BestFeatures/best-featurers";
import CustomerReviews from "../components/Reviews/customer-reviews";
import Pricing from "../components/PricingPlans/landing-pricing";

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
      <div>
        <MagicInAction />
      </div>
      <div>
        <BestFeatures />
      </div>
      <div>
        <CustomerReviews />
      </div>
      <div>
        <Pricing />
      </div>
    </div>
  );
}

export default LandingView;
