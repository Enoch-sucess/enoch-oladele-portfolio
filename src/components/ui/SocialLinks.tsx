import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import type { SocialLink } from "../../types";
import { socialLinks } from "../../data/portfolio";

const iconLookup = {
  linkedin: FaLinkedin,
  github: FaGithub,
  email: FaEnvelope,
};

type SocialLinkProps = {
  className?: string;
  variant?: "boxed" | "plain";
};

const SocialLinks = ({
  className = "",
  variant = "plain",
}: SocialLinkProps) => {
  return (
    <ul className={`flex gap-4 ${className}`}>
      {socialLinks.map((link: SocialLink) => {
        const Icon = iconLookup[link.icon];

        return (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={link.label}
              target={link.icon === "email" ? undefined : "_blank"}
              rel={link.icon === "email" ? undefined : "noopener noreferrer"}
              className={`focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current text-black ${variant === "boxed" ? "inline-flex size-10 items-center justify-center rounded-md bg-line text-black transition-colors duration-200 hover:bg-gray-400" : "inline-flex items-center justify-center text-white transition-colors duration-200 hover:text-gray-300"}`}
            >
              <Icon size={22} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialLinks;
