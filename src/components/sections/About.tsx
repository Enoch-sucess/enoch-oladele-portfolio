import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa6";
import SectionHeading from "../ui/SectionHeading";
import BracketButton from "../ui/BracketButton";
import Divider from "../ui/Divider";
import { about } from "../../data/portfolio";

const iconLookup = {
  frontend: FaCode,
  backend: FaServer,
  fullstack: FaLayerGroup,
};

const About = () => {
  return (
    <section id="about" className="px-6 py-section md:px-12 lg:px-20">
      <div className="mx-auto w-full flex max-w-4xl flex-col items-center gap-8 text-center">
        <SectionHeading title="About Me" />

        <div className="flex max-w-2xl flex-col gap-4 text-sm leading-relaxed text-muted md:text-base">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-2 text-black">
          <BracketButton href={about.ctaHref}>{about.ctaLabel}</BracketButton>
        </div>

        <div className="my-8 text-black">
          <Divider />
        </div>

        <ul className="mt-14 flex w-full flex-wrap justify-center gap-x-22 gap-y-18 text-left">
          {about.services.map((service) => {
            const Icon = iconLookup[service.icon];

            return (
              <li
                key={service.title}
                className="relative w-full max-w-full max-w-sm sm:w-[calc(50%-2rem)]"
              >
                <Icon
                  size={24}
                  aria-hidden="true"
                  className="absolute -left-4 -top-4 size-12 text-black/10"
                />
                <h3 className="relative text-sm font-bold uppercase tracking-[0.2em] text-black">
                  {service.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="my-6 text-black">
          <Divider />
        </div>
      </div>
    </section>
  );
};

export default About;
