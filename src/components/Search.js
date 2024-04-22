import React from "react";
import icons from "../utils/icons";

const Search = () => {
  const { FiSearch } = icons;
  return (
    <div className="flex items-center ml-5 bg-[#DDE4E4]  rounded-[20px]">
      <span className="h-10 pl-2 flex items-center justify-center text-gray-500"><FiSearch size={20} /></span>
      
      <input
        type="text"
        className="outline-none bg-transparent px-3 py-2 h-10 text-gray-500 placeholder:text-gray-400 "
        placeholder="tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
      />
    </div>
  );
};

export default Search;
