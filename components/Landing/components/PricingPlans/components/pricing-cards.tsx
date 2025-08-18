import React from "react";
import { Sparkles, Zap } from "lucide-react";
import { Infinity, Send, Calendar, LogOut } from "lucide-react";
import { Award, User, Bell } from "lucide-react";

function PricingCards() {
  return (
    <div className="flex md:flex-row flex-col gap-3">
      {/* // First Card  */}
      <div className="flex flex-col justify-between border w-[390px] rounded-xl bg-white px-4 py-4 ">
        {/* Header */}
        <div className="flex justify-start items-center gap-2 mb-6 px-3 pt-6">
          <span className="p-2 rounded-md bg-neutral-100">
            <Sparkles className="text-blue-500 w-5 h-5" />
          </span>
          <span className="text-lg font-semibold text-gray-900">
            Monthly Plan
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-base leading-relaxed px-3">
          Ideal for trying things out with full flexibility — no commitment, all
          access.
        </p>

        {/* Price */}
        <div className="mb-6 px-3">
          <span className="text-5xl text-gray-900 font-light">
            <span className="text-3xl">$</span>29.00
          </span>
          <span className="text-gray-600 text-base">/month</span>
        </div>

        {/* Features */}
        <div className="mb-6 px-3 py-5 h-56">
          <p className="font-light text-gray-900 pb-6 text-lg">
            What will you get?
          </p>
          <div className="flex flex-col gap-3 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Infinity className="w-4 h-4" />
              <span>Full voice AI access</span>
            </div>
            <div className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span>Unlimited email processing</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Calendar management</span>
            </div>
            <div className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="py-3 border border-blue-500 rounded-md text-blue-600 font-medium hover:bg-blue-50 transition cursor-pointer ">
          Get Started
        </button>
      </div>
      {/* // Second Card  */}
      <div className="flex flex-col justify-between w-[390px] rounded-xl bg-white px-4 py-4 border border-blue-500">
        {/* Header */}
        <div className="flex justify-start items-center gap-2 mb-6 px-3 pt-6">
          <span className="p-2 rounded-md bg-neutral-100">
            <Zap className="text-pink-500 w-5 h-5" />
          </span>
          <span className="text-lg font-semibold text-gray-900">Annual</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 text-base leading-relaxed px-3">
          Annual plan with higher savings and a 3 day free trial. Join today!
        </p>

        {/* Price */}
        <div className="mb-6 px-3">
          <span className="text-5xl text-gray-900 font-light">
            <span className="text-3xl">$</span>199.00
          </span>
          <span className="text-gray-600 text-base">/year</span>
        </div>

        {/* Features */}
        <div className="mb-6 px-3 py-5 h-56">
          <p className="font-light text-gray-900 pb-6 text-lg">
            What will you get?
          </p>
          <div className="flex flex-col gap-3 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Access to all premium features</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Priority support</span>
            </div>
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4" />
              <span>Priority updates and alerts</span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="w-full py-3 rounded-md text-white font-medium bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-90 transition cursor-pointer">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default PricingCards;
