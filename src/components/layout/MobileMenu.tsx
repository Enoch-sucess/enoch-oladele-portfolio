import { Link } from "react-router-dom";
import { navbarLinks } from "../../data/portfolio";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  const regularLinks = navbarLinks.filter((link) => !link.isButton);
  const buttonLink = navbarLinks.find((link) => link.isButton);

  return (
    <div
      id="mobile-menu"
      className="fixed inset-x-0 top-[4.5rem] z-40 text-white lg:hidden"
    >
      <nav aria-label="Mobile navigation">
        <ul className="flex flex-col items-center gap-8 bg-black/85 py-10 backdrop-blur-sm">
          {regularLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={`/${link.href}`}
                onClick={onClose}
                className="text-xs font-bold transition-colors hover:text-gray-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
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
              className="text-xs font-bold transition-colors hover:text-gray-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Download CV
            </a>
          </li>
        </ul>

        {buttonLink && (
          <Link
            to={`/${buttonLink.href}`}
            onClick={onClose}
            className="block bg-white py-4 text-center text-xs font-bold uppercase text-black transition-colors hover:bg-gray-200 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-black"
          >
            {buttonLink.label} me
          </Link>
        )}
      </nav>
    </div>
  );
};

export default MobileMenu;
