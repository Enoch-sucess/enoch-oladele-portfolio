import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

import { navbarLinks } from "../../data/portfolio";
import MobileMenu from "./MobileMenu";
import { Link, useLocation } from "react-router-dom";
import useActiveSection from "../../hooks/useActiveSection";

const sectionIds = ["home", "about", "skills", "approach", "projects"];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  //Detect when the pae has been scrolled.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    //set the initial state, including after a page reload.
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close the menu when Escape is pressed.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Prevent background scrolling while the menu is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  //Close the mobile menu when resizing the desktop
  useEffect(() => {
    if (!isOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  //Trear an open mobile menu like a scroll navbar.
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const solid = scrolled || isOpen || !isHome;

  const activeSection = useActiveSection(sectionIds, isHome);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          isOpen
            ? "bg-black"
            : scrolled
              ? "border-b border-white/20 bg-black/60 backdrop-blur-md"
              : !isHome
                ? "bg-black"
                : "bg-black lg:bg-transparent"
        }`}
      >
        <nav
          aria-label="Main"
          className="flex items-center justify-between px-6 py-4 md:px-12"
        >
          {/* Logo */}
          <Link
            to="/#home"
            onClick={closeMenu}
            className={`text-lg font-bold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${solid ? "text-white" : "text-white lg:text-black"}`}
          >
            EO
          </Link>

          {/* Desktop Navigation and Download CV*/}
          <div className="hidden items-center gap-6 text-white lg:flex">
            <ul className="flex items-center gap-6 ">
              {navbarLinks.map((link) => {
                const isActive = isHome && activeSection === link.href.slice(1);

                return (
                  <li key={link.label}>
                    <Link
                      to={`/${link.href}`}
                      aria-current={isActive ? "location" : undefined}
                      className={`text-xs font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                        link.isButton
                          ? "rounded-full bg-white px-4 py-2 text-black hover:bg-gray-200 hover:text-black"
                          : isActive
                            ? "underline decoration-2 underline-offset-8"
                            : "hover:text-gray-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop Download CV */}
            <a
              href="/cv.pdf"
              download
              className="rounded-full border border-white px-4 py-2 text-xs font-bold text-white transition-colors duration-300 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Download CV
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((previous) => !previous)}
            className="rounded-md p-2 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:hidden"
          >
            {isOpen ? (
              <FaXmark size={24} aria-hidden="true" />
            ) : (
              <FaBars size={24} aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <MobileMenu isOpen={isOpen} onClose={closeMenu} />
    </>
  );
};

export default Navbar;
