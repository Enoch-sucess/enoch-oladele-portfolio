import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash, key]);

  return null;
};

export default ScrollManager;
