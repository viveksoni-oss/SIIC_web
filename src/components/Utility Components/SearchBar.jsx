import { inputStyle } from "../../data/Styles";
import { X, Search } from "lucide-react";

function SearchBar({ search, setSearch, placeholder }) {
  return (
    <div className="relative w-full sm:w-auto max-w-sm">
      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        size={20}
      />
      <input
        className={`${inputStyle} pl-10`}
        placeholder={placeholder}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <X
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
          size={20}
          onClick={() => setSearch("")}
        />
      )}
    </div>
  );
}

export default SearchBar;
