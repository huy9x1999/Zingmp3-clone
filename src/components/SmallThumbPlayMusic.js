import React from "react";
import icons from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../store/actions";

const SmallThumbPlayMusic = ({ item, notAtAlbum }) => {
  const { TbPlayerPlayFilled, HiPause } = icons;
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state) => state.app);
  const { curSongId } = useSelector((state) => state.music);
  const { playList } = useSelector((state) => state.playList);

  const handlePlay = async (encodeId) => {
    await dispatch(action.setCurSongId(encodeId));
    await dispatch(action.changeIsPlaying(true));
    if (!notAtAlbum) {
      dispatch(action.playAlbum(true));
      dispatch(
        action.addSongs([...playList?.song?.items.map((item) => item.encodeId)])
      );
    } else {
      dispatch(action.playAlbum(false));
      dispatch(action.addSongs([curSongId]));
    }
  };

  const handlePause = () => {
    dispatch(action.changeIsPlaying(false));
  };
  return (
    <div className="w-full h-full relative group">
      <img className="w-full object-cover" src={item?.thumbnailM} alt="" />
      <div className="hidden group-hover:flex text-white absolute top-0 left-0 w-full h-full z-5 bg-black/40 items-center justify-around">
        <span className="cursor-pointer">
          {isPlaying && curSongId === item?.encodeId ? (
            <HiPause onClick={handlePause} size={20} />
          ) : (
            <TbPlayerPlayFilled
              onClick={() => handlePlay(item?.encodeId)}
              size={20}
              className="ml-0.5"
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default SmallThumbPlayMusic;
