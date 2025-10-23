import { useEffect } from "react";
import { useLocation } from "react-router"; // Use react-router-dom

function useTitle() {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (pathname === "/" || pathname === "") {
      document.title = "SIIC IIT Kanpur";
    } else {
      // Get path after slash, e.g. "/directors" => "Directors"
      const pageName = pathname
        .slice(1)
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
      document.title = `SIIC IITK | ${pageName}`;
    }
  }, [pathname]);
}

export default useTitle;
