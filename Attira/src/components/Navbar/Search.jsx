import React, { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
    } else {
      navigate("/products");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xs">
      <div className="flex items-center gap-2 p-2 border border-gray-400 rounded-2xl bg-white focus-within:border-orange-400 transition-colors duration-200">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="flex-1 outline-none bg-transparent px-2 text-gray-700"
          aria-label="Search"
        />
        <button type="submit">
          <GrSearch size={22} className="text-gray-600 hover:text-orange-400" />
        </button>
      </div>
    </form>
  );
}

export default Search;
