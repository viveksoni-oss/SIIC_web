import { inputStyle } from "../../data/Styles";
import { X, Search, Info as InfoCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { SearchbarFocus, SearchbarBlur } from "./utilityFunctions";

function SearchBar({ search, setSearch, placeholder }) {
  const searchBarRef = useRef(null);
  const isFocusedRef = useRef(false);
  const isFirstTimeRef = useRef(true);

  const onFocus = () => {
    isFocusedRef.current = true;
  };

  const onBlur = () => {
    isFocusedRef.current = false;
  };
  const isPrintableKey = (key) => {
    // Only alphanumeric characters (no special keys, modifiers, etc.)
    return /^[a-zA-Z0-9]$/.test(key);
  };

  useEffect(() => {
    function onKeyDown(e) {
      SearchbarFocus(e, searchBarRef);
      SearchbarBlur(e, searchBarRef);

      if (
        !isFocusedRef.current &&
        isFirstTimeRef.current &&
        e.key !== "/" &&
        e.key != "Escape" &&
        isPrintableKey(e.key) &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.altKey
      ) {
        toast.info(`Press ' / ' to jump to the Search box`, {
          position: "bottom-right",
          icon: <InfoCircle size={20} color="#ff8a40" />,
          autoClose: 2000,
        });
        isFirstTimeRef.current = false;
        // Reset after 5 seconds to show again if needed
        setTimeout(() => {
          isFirstTimeRef.current = true;
        }, 5000);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  const handleClear = () => {
    setSearch("");
    searchBarRef.current?.focus();
  };

  return (
    <div className="relative w-full sm:w-auto max-w-sm">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        size={20}
      />
      <input
        ref={searchBarRef}
        className={`${inputStyle} pl-10`}
        placeholder={placeholder}
        type="input"
        value={search}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        onChange={(e) => setSearch(e.target.value)}
        autoComplete="off"
        spellCheck="false"
      />
      {search && (
        <X
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
          size={20}
          onClick={() => handleClear()}
        />
      )}
    </div>
  );
}

export default SearchBar;
