import { useEffect } from "react";
import { useLocation } from "react-router";

function useTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Home page
    if (pathname === "/" || pathname === "") {
      document.title = "SIIC IIT Kanpur";
      return;
    }

    // Get last non-empty path segment
    const segments = pathname.split("/").filter(Boolean);
    let pageName = segments.length > 0 ? segments[segments.length - 1] : "";

    // Replace hyphens/underscores and capitalize each word
    pageName = pageName
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());

    document.title = pageName ? `SIIC IITK | ${pageName}` : "SIIC IIT Kanpur";
  }, [pathname]);
}

export default useTitle;
