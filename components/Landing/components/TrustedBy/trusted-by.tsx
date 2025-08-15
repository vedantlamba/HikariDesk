import { Marquee } from "@/components/magicui/marquee";

const companies = [
  { img: "/trustedBy/y.png", alt: "Y Combinator" },
  { img: "/trustedBy/meta.png", alt: "Meta" },
  { img: "/trustedBy/nvidia.png", alt: "Nvidia" },
  { img: "/trustedBy/disney.png", alt: "Disney" },
  { img: "/trustedBy/google.png", alt: "Google" },
];
function TrustedBy() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden md:py-32 py-20">
      <h2 className="pb-10 text-base md:text-4xl font-semibold text-center ">
        Used by busy professionals from
      </h2>

      <Marquee pauseOnHover className="[--duration:25s]">
        {companies.map((company, idx) => (
          <div key={idx} className="flex items-center justify-center px-8">
            <img
              src={company.img}
              alt={company.alt}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

export default TrustedBy;
