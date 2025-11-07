import { inputStyle } from "../../data/Styles";
import { X, Search, Info as InfoCircle } from "lucide-react";
import { useEffect, useRef, useCallback } from "react";
import { toast } from "react-toastify";
import { SearchbarFocus, SearchbarBlur } from "./utilityFunctions";

// Helper function outside component (doesn't need to be recreated)
const isPrintableKey = (key) => /^[a-zA-Z0-9]$/.test(key);

function SearchBar({ search, setSearch, placeholder }) {
  const searchBarRef = useRef(null);
  const isFocusedRef = useRef(false);
  const isFirstTimeRef = useRef(true);
  const toastTimeoutRef = useRef(null);

  // Memoized handlers for better performance
  const handleFocus = useCallback(() => {
    isFocusedRef.current = true;
  }, []);

  const handleBlur = useCallback(() => {
    isFocusedRef.current = false;
  }, []);

  const handleClear = useCallback(() => {
    setSearch("");
    searchBarRef.current?.focus();
  }, [setSearch]);

  const handleChange = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  // Show toast notification for first-time users
  const showSearchHint = useCallback(() => {
    toast.info("Press ' / ' to jump to the Search box", {
      position: "bottom-right",
      icon: <InfoCircle size={20} color="#ff8a40" />,
      autoClose: 2000,
    });

    isFirstTimeRef.current = false;

    // Clear any existing timeout
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    // Reset after 5 seconds to show again if needed
    toastTimeoutRef.current = setTimeout(() => {
      isFirstTimeRef.current = true;
    }, 5000);
  }, []);

  // Keyboard event handler
  useEffect(() => {
    function handleKeyDown(e) {
      // Handle focus/blur shortcuts
      SearchbarFocus(e, searchBarRef);
      SearchbarBlur(e, searchBarRef);

      // Show hint on first printable key (if not focused and not special keys)
      const shouldShowHint =
        !isFocusedRef.current &&
        isFirstTimeRef.current &&
        isPrintableKey(e.key) &&
        e.key !== "/" &&
        e.key !== "Escape" &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey;

      if (shouldShowHint) {
        showSearchHint();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, [showSearchHint]);

  return (
    <div className="relative w-full sm:w-auto max-w-sm">
      {/* Search Icon */}
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        size={20}
        aria-hidden="true"
      />

      {/* Input Field */}
      <input
        ref={searchBarRef}
        className={`${inputStyle} pl-10 pr-10`}
        placeholder={placeholder}
        type="text"
        value={search}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        autoComplete="off"
        spellCheck="false"
        aria-label="Search input"
        role="searchbox"
      />

      {/* Clear Button (only visible when there's text) */}
      {search && (
        <button
          onClick={handleClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
          aria-label="Clear search"
          type="button"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
