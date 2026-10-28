import { Link } from "react-router-dom";
import { navbarLinks } from "../../data/portfolio";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black text-white lg:hidden"
    >
      <nav aria-label="Mobile navigation">
        <ul className="flex flex-col items-center gap-8">
          {navbarLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={`/${link.href}`}
                onClick={onClose}
                className={`text-lg font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${link.isButton ? "inline-block rounded-full bg-white px-6 py-3 text-black" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <a
              href="/cv.pdf"
              download
              onClick={onClose}
              className="inline-block rounded-full border border-white px-6 py-3 text-lg font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
