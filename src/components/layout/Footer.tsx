import { FaChevronUp } from "react-icons/fa";
import SocialLinks from "../ui/SocialLinks";
import { profile } from "../../data/portfolio";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ink px-6 py-10 text-white md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <button
          type="button"
          onClick={handleBackToTop}
          className="flex cursor-pointer flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] transition-colors duration-200 hover-text-gray-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <FaChevronUp size={12} aria-hidden="true" />
          Back to top
        </button>

        <SocialLinks className="justify-center [&_a]:text-white" />

        <p className="text-xs text-white/70">
          &copy; {new Date().getFullYear()}
          {""}
          <span className="font-bold text-white">{profile.name}</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
