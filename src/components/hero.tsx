import { useRef } from "react";
import Section from "./section";
import Button from "./button";
import { curve, robot } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/hero";
import CompanyLogos from "./companyLogos";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-2 w-[90%] max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Themes with {` `}
            <span className="inline-block relative">
              Stunning{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 w-[90%] max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within Stunning. Upgrade your productivity
            with Stunning, the open AI theme app.
          </p>
          <Button
            className="relative inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#fefefe,45%,#ccc,55%,#fefefe)] bg-[length:200%_100%] px-6 font-medium text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            href="/pricing"
          >
            Get started
          </Button>
        </div>
      </div>

      <div className="relative w-[90%] max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
        <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient overflow-y-hidden">
          <div className="relative bg-transparent rounded-[1rem]">
            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

            <div className="relative z-1 aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
              <img
                src={robot}
                className="w-full scale-[1.7] translate-y-[8%] md:scale-[1.25] md:-translate-y-[10%] lg:-translate-y-[17%]"
                width={1024}
                height={490}
                alt="AI"
              />
            </div>

            <Gradient />
          </div>
        </div>
        <BackgroundCircles />
        <CompanyLogos className="relative z-10 mt-20 lg:block" />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
