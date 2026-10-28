import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type BracketButtonProps = {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
  ariaLabel?: string;
  className?: string;
};

const BracketButton = ({
  children,
  href,
  to,
  onClick,
  type = "button",
  external,
  ariaLabel,
}: BracketButtonProps) => {
  const classes =
    "border-l-2 border-r-2 border-current font-bold uppercase tracking-[0.2em] text-xs px-6 sm:px-10 py-3 text-center inline-block focus-visible:outlet-2 focus-visible:outlet-offset-4 focus-visible:outlet-current transition-colors duration-300 cursor-pointer";

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default BracketButton;
