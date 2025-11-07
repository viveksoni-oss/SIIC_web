import { useEffect } from "react";
import { useLocation } from "react-router";

export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If URL has a hash, scroll to the element with that id
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.substring(1));
      console.log(window.location.hash.substring(1));
      console.log(el)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return; // DO NOT scroll to top in this case!
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
}
