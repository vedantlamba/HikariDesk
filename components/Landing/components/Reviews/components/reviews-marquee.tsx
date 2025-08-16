import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
import React from "react";

const reviews = [
  {
    name: "Sophie Müller",
    username: "@sophie",
    body: "HikariDesk reduced our response time from hours to minutes. It feels like having an extra team working 24/7 without the overhead.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Luca Moretti",
    username: "@luca",
    body: "Our clients expect instant resolutions, and HikariDesk delivers exactly that. The automation is seamless and the accuracy is outstanding.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Elena Petrova",
    username: "@elena",
    body: "Integrating HikariDesk was the smoothest onboarding we’ve ever had. Our team now focuses on strategy instead of repetitive tickets.",
    img: "https://randomuser.me/api/portraits/women/39.jpg",
  },
  {
    name: "Anders Johansen",
    username: "@anders",
    body: "With HikariDesk, our support resolution rate improved by 60%. It’s like having a highly trained agent available all the time.",
    img: "https://randomuser.me/api/portraits/men/48.jpg",
  },
  {
    name: "Isabelle Laurent",
    username: "@isabelle",
    body: "Clients constantly praise the speed of our support since switching to HikariDesk. It’s elevated our brand reputation significantly.",
    img: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    name: "Mateusz Kowalski",
    username: "@mateusz",
    body: "HikariDesk gave us automation that actually understands nuance. We’ve saved countless hours while keeping customers happier than ever.",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Katarina Novak",
    username: "@novak",
    body: "Our global support desk runs day and night, and HikariDesk handles it flawlessly. Reliable, professional, and incredibly efficient.",
    img: "https://randomuser.me/api/portraits/women/58.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const thirdRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-full sm:max-w-sm cursor-pointer overflow-hidden rounded-xl p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      {/* Header (avatar + name) */}
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 rounded-full object-cover"
          alt={name}
          src={img}
        />
        <figcaption className="text-sm font-semibold dark:text-white">
          {name}
        </figcaption>
      </div>

      {/* Body text */}
      <blockquote className="mt-2 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {body}
      </blockquote>
    </figure>
  );
};

function ReviewsMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        vertical
        className="[--duration:20s] hidden md:block"
      >
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee
        pauseOnHover
        vertical
        className="[--duration:20s] hidden md:block"
      >
        {thirdRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

export default ReviewsMarquee;
