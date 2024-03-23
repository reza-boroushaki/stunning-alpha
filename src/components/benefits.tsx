import Arrow from "../assets/svg/Arrow";
import { benefits } from "../constants";
import Card from "./card";
import Heading from "./heading";
import Section from "./section";

const Benefits = () => {
  return (
    <Section id="features" className="-mt-[6.25rem]">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Build Smarter, Not Harder with Stunning"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <Card
              key={item.id}
              className="rounded-[22px] max-w-sm p-4 bg-n-8 dark:bg-zinc-900"
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
