import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FaPause, FaPlay } from "react-icons/fa6";
import Divider from "../ui/Divider";
import SocialLinks from "../ui/SocialLinks";
import { profile } from "../../data/portfolio";

const SLIDE_INTERVAL = 6000;
const SWIPE_DISTANCE = 60;

const MOUNTAIN_IMAGE =
  "https://res.cloudinary.com/dzezte7kv/image/upload/f_auto,q_auto,w_1200/Misty_Mountain_Valley_at_Twilight.png";

const firstName = profile.name.split(" ")[0];

const MountainSlide = () => (
  <div className="relative flex size-full flex-col items-center justify-center px-6 pb-12 pt-24 text-center text-white">
    <img
      src={MOUNTAIN_IMAGE}
      alt=""
      aria-hidden="true"
      fetchPriority="high"
      className="absolute inset-0 size-full object-cover"
    />
    <div aria-hidden="true" className="absolute inset-0 bg-black/40" />

    <div className="relative z-10 flex flex-col items-center gap-5">
      <p className="text-lg font-light">my name is {firstName}</p>

      <h1 className="text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
        I&apos;m a {profile.role}
      </h1>

      <div className="text-white">
        <Divider />
      </div>

      <SocialLinks
        variant="boxed"
        className="justify-center pt-2 [&_a]:rounded-full [&_a]:bg-white"
      />
    </div>
  </div>
);

const PortraitSlide = () => (
  <div className="relative size-full overflow-hidden bg-black text-white">
    <img
      src={profile.photo}
      alt={profile.photoAlt}
      className="absolute inset-x-0 bottom-0 mx-auto h-[82%] w-full object-contain object-bottom"
    />

    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-[30%] bg-neutral-600 [clip-path:polygon(0_35%,100%_0,100%_100%,0_100%)]"
    />

    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-6 pb-8">
      <div className="flex flex-col gap-1 text-left">
        <p className="text-sm">{profile.greeting}</p>
        <h1 className="text-3xl font-bold leading-tight">{profile.name}</h1>
        <p className="text-xs text-white/80">{profile.role}</p>
      </div>

      <SocialLinks variant="plain" className="flex-col [&_a]:text-white" />
    </div>
  </div>
);

const slides = [MountainSlide, PortraitSlide];

const MobileHeroCarousel = () => {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const autoplay = !paused && !reduceMotion;
  const Slide = slides[index];

  const goTo = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  // Advance automatically. The timer restarts whenever the slide changes,
  // so a manual change always gets a full interval.
  useEffect(() => {
    if (!autoplay) return;

    const timer = window.setTimeout(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => window.clearTimeout(timer);
  }, [autoplay, index]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Introduction"
      className="relative h-svh min-h-[560px] overflow-hidden bg-black"
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
          aria-live={autoplay ? "off" : "polite"}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(_, info) => {
            if (info.offset.x < -SWIPE_DISTANCE) goTo(index + 1);
            if (info.offset.x > SWIPE_DISTANCE) goTo(index - 1);
          }}
        >
          <Slide />
        </motion.div>
      </AnimatePresence>

      {/* Controls sit just under the navbar */}
      <div className="absolute inset-x-0 top-[5rem] z-20 flex items-center justify-center gap-2">
        {!reduceMotion && (
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="flex size-8 items-center justify-center rounded-full border border-white/60 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {paused ? (
              <FaPlay size={10} aria-hidden="true" />
            ) : (
              <FaPause size={10} aria-hidden="true" />
            )}
          </button>
        )}

        <div className="flex items-center">
          {slides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Show slide ${dotIndex + 1} of ${slides.length}`}
              aria-current={dotIndex === index ? "true" : undefined}
              className="p-2 focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-white"
            >
              <span
                className={`block size-2 rounded-full transition-colors duration-300 ${
                  dotIndex === index ? "bg-white" : "bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileHeroCarousel;
