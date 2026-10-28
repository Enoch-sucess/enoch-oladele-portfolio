import BracketButton from "../ui/BracketButton";
import Reveal from "../ui/Reveal";
import { highlight } from "../../data/portfolio";

const Highlights = () => {
  return (
    <section
      aria-labelledby="highlights-heading"
      className="bg-highlight text-white"
    >
      <Reveal className="mx-auto flex max-w-7xl flex-col items-start gap-5 px-6 py-12 md:px-12 md:py-16 lg:px-20">
        <h2
          id="highlights-heading"
          className="text-xs font-bold uppercase tracking-[0.25em] text-paper"
        >
          {highlight.heading}
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-line md:text-base">
          {highlight.text}
        </p>
        <BracketButton href={highlight.ctaHref}>
          {highlight.ctaLabel}
        </BracketButton>
      </Reveal>
    </section>
  );
};

export default Highlights;
