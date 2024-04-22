import React from "react";
import icons from "../utils/icons";

const PlayMusic = ({ link, isShowMenu, size, className, onPlay }) => {
  const { TbPlayerPlayFilled, GoHeart, PiDotsThreeBold } = icons;
  return (
    <div className={`text-white absolute top-0 left-0 w-full h-full z-5 bg-black/40 flex items-center justify-around ${className}`}>
      <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer rounded-full hover:bg-white/30">
        <GoHeart size={18} />
      </div>
      <div onClick={onPlay} className="w-[45px] h-[45px] flex items-center justify-center border cursor-pointer border-white rounded-full">
        <TbPlayerPlayFilled size={24} className="ml-0.5" />
      </div>
      <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer rounded-full hover:bg-white/30">
        <PiDotsThreeBold size={20} />
      </div>
    </div>
  );
};

export default PlayMusic;
