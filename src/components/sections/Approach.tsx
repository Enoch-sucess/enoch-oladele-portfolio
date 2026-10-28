import { motion } from "motion/react";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import { approach } from "../../data/portfolio";
import { fadeUp, viewportOnce } from "../../lib/motion";

const Approach = () => {
  return (
    <section
      id="approach"
      className="px-6 pb-section pt-section md:px-12 lg:px-20"
    >
      <Reveal>
        <SectionHeading title="How I work" />
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-ink/80">
          {approach.intro}
        </p>
      </Reveal>

      <ol className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
        {approach.points.map((point, index) => (
          <motion.li
            key={point.title}
            variants={fadeUp}
            custom={(index % 2) * 0.12}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="border-l-2 border-black pl-5 md:last:odd:col-span-2"
          >
            <span
              aria-hidden="true"
              className="text-3xl font-bold text-black/30"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <h3 className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-black">
              {point.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-ink/80">
              {point.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
};

export default Approach;
