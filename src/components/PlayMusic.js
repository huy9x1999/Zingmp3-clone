import React from "react";
import icons from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../store/actions";

const PlayMusic = ({ isPlay, isHideShowMenu, className, encodeId }) => {
  const {
    TbPlayerPlayFilled,
    GoHeart,
    PiDotsThreeBold,
    HiPause,
    PiShuffleLight
  } = icons;
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state) => state.app);
  const { curSongId } = useSelector((state) => state.music);

  const handlePlay = async (encodeId) => {
    if (encodeId) {
      await dispatch(action.setCurSongId(encodeId));
      await dispatch(action.changeIsPlaying(true));
    }
  };

  const handlePause = () => {
    dispatch(action.changeIsPlaying(false));
  };
  return (
    <div
      className={`text-white absolute top-0 left-0 w-full h-full z-5 bg-black/40 flex items-center justify-around ${className}`}
    >
      {!isHideShowMenu && (
        <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer rounded-full hover:bg-white/30">
          <GoHeart size={18} />
        </div>
      )}

      <div className="w-[45px] h-[45px] flex items-center justify-center border cursor-pointer border-white rounded-full">
        {isPlay ? (
          isPlaying && curSongId === encodeId ? (
            <HiPause onClick={handlePause} size={24} />
          ) : (
            <TbPlayerPlayFilled
              onClick={() => handlePlay(encodeId)}
              size={24}
              className="ml-0.5"
            />
          )
        ) : (
          <PiShuffleLight size={24} />
        )}
      </div>
      {!isHideShowMenu && (
        <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer rounded-full hover:bg-white/30">
          <PiDotsThreeBold size={20} />
        </div>
      )}
    </div>
  );
};

export default PlayMusic;
