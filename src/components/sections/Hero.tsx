import { motion } from "motion/react";
import MobileHeroCarousel from "./MobileHeroCarousel";
import SocialLinks from "../ui/SocialLinks";
import useMediaQuery from "../../hooks/useMediaQuery";
import { profile } from "../../data/portfolio";
import { fadeUp, stagger } from "../../lib/motion";

const Hero = () => {
  // Matches Tailwind's md breakpoint (768px). Only one layout is rendered,
  // so the other layout's images are never downloaded.
  const isMobile = useMediaQuery("(max-width: 767.98px)");

  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden bg-surface"
    >
      {isMobile ? (
        <MobileHeroCarousel />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-black md:block [clip-path:polygon(49%_0,100%_0,100%_100%,40%_100%)] border-none"
          />

          <div className="relative z-10 mx-auto grid min-h-svh max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-24 md:grid-cols-2 md:px-12 lg:px-20">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="order-2 flex flex-col justify-center gap-3 pb-12 md:order-1 md:pb-0"
            >
              <motion.p
                variants={fadeUp}
                className="text-xl font-semibold uppercase text-black"
              >
                {profile.greeting}
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl"
              >
                {profile.name}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-sm text-muted sm:text-lg"
              >
                {profile.role}
              </motion.p>

              <motion.div variants={fadeUp} className="pt-5">
                <SocialLinks variant="boxed" className="" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 48 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="order-1 flex min-h-[420px] items-end justify-center md:order-2 md:min-h-svh"
            >
              <div className="relative flex h-full w-full max-w-lg items-end justify-center">
                <img
                  src={profile.photo}
                  alt={profile.photoAlt}
                  width={1024}
                  height={1536}
                  fetchPriority="high"
                  className="relative z-10 max-h-[80vh] w-full object-contain object-bottom md:max-h-[90vh]"
                />
              </div>
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
