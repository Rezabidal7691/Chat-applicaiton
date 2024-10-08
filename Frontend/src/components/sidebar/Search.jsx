import React from "react";
import { FaSearch } from "react-icons/fa";
function Search() {
  return (
      <div className="w-full sticky top-0 right-0 flex justify-between items-center bg-base-100 p-3">
        <input
          type="text"
          className="input input-bordered input-sm w-full max-w-xs ml-2"
          placeholder="جستجو"
        />
        <button className="btn btn-primary rounded-lg text-xs btn-sm text-white ">
          <FaSearch />
        </button>
      </div>
  );
}

export default Search;
