import React from "react";
import icons from "../utils/icons";
import { Search } from "../components";
import { IconDownloadComputer } from "../utils/customIcons";

const Header = () => {
  const { BsArrowLeft, BsArrowRight,SlSettings } = icons;

  return (
    <div className=" flex justify-between w-full inter-font">
      <div className="flex items-center flex-grow flex-shrink-0 mr-[10px]">
        <div className="flex text-gray-400 gap-5 flex-grow-0 flex-shrink-0">
          <span>
            <BsArrowLeft size={24} />
          </span>
          <span>
            <BsArrowRight size={24} />
          </span>
        </div>
        <div className="flex-grow flex-shrink-0">
          <Search />
        </div>
      </div>
      <div className="flex flex-grow-0 flex-shrink-0 items-center">
        <a
          className="inline-block mr-3 py-[10px] px-5 rounded-[100px] bg-third hover:bg-third/80 text-white text-[14px] tracking-[0.1px] leading-[20px] font-bold"
          href="/"
          target="_blank"
        >
          Nâng cấp tài khoản
        </a>
        <a
          className="flex gap-1 mr-3 py-[10px] px-6 rounded-[100px] text-third bg-[hsla(0,0%,100%,0.3)] text-[14px] tracking-[0.1px] leading-[20px] font-bold"
          href="/"
          target="_blank"
        >
          <IconDownloadComputer size={20} />
          Tải bản Windows
        </a>
        <button className="rounded-full w-10 h-10 bg-[hsla(0,0%,100%,0.3)] flex items-center justify-center mr-2.5">
          <SlSettings size={18} />
        </button>
        <button className="rounded-full w-10 h-10 bg-green-700">
        </button>
      </div>
    </div>
  );
};

export default Header;
