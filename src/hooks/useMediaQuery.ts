import { useSyncExternalStore } from "react";

const useMediaQuery = (query: string) =>
  useSyncExternalStore(
    (onchange) => {
      const media = window.matchMedia(query);

      media.addEventListener("change", onchange);
      return () => media.removeEventListener("change", onchange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );

export default useMediaQuery;
