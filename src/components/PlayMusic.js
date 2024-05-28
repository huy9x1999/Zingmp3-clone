import React from "react";
import icons from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../store/actions";
import { Audio } from "react-loader-spinner";

const PlayMusic = ({ isPlay, isHideShowMenu, className, item, isSong }) => {
  const { TbPlayerPlayFilled, GoHeart, PiDotsThreeBold, PiShuffleLight } =
    icons;
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state) => state.app);
  const { curSongId } = useSelector((state) => state.music);

  const handlePlay = async (encodeId) => {
    if (isSong) {
      if (item?.type === 1) {
        dispatch(action.setCurSongId(item.encodeId));
        dispatch(action.playAlbum(true));
      } else if (encodeId) {
        await dispatch(action.setCurSongId(encodeId));
        await dispatch(action.changeIsPlaying(true));
      }
    }
  };

  const handlePause = () => {
    dispatch(action.changeIsPlaying(false));
  };
  return (
    <div className="w-full h-full relative group">
      <img
        className="w-full object-cover  group-hover:scale-110 transition-transform duration-500 ease-in-out"
        src={item?.thumbnailM}
        alt=""
      />
      <div
        className={`${
          curSongId === item?.encodeId ? "flex" : "hidden"
        } group-hover:flex text-white absolute top-0 left-0 w-full h-full z-5 bg-black/40 flex items-center justify-around ${className}`}
      >
        {!isHideShowMenu && (
          <div className="w-[30px] h-[30px] flex items-center justify-center cursor-pointer rounded-full hover:bg-white/30">
            <GoHeart size={18} />
          </div>
        )}

        <div className="w-[45px] h-[45px] flex items-center justify-center border cursor-pointer border-white rounded-full">
          {isPlay ? (
            isPlaying && curSongId === item?.encodeId ? (
              <Audio
                height="23"
                width="23"
                color="#fff"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
                onClick={() => handlePause()}
              />
            ) : (
              <TbPlayerPlayFilled
                onClick={() => handlePlay(item?.encodeId)}
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
    </div>
  );
};

export default PlayMusic;
