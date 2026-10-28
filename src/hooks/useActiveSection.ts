import { useEffect, useState } from "react";

// Returns the id of the section crossing the middle of the screen.
// Pass `enabled = false` on pages where those sections don't exist.
const useActiveSection = (ids: string[], enabled: boolean) => {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids, enabled]);

  return enabled ? active : null;
};

export default useActiveSection;
