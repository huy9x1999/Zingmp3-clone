import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as apis from "../apis";
import { Link } from "react-router-dom";
import icons from "../utils/icons";
import * as action from "../store/actions";

const Player = () => {
  const {
    GoHeart,
    PiDotsThreeBold,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    TbPlayerPlayFilled,
    PiShuffleLight,
    PiRepeatLight,
    HiPause
  } = icons;

  const { curSongId, isPlaying } = useSelector((state) => state.music);

  const dispatch = useDispatch();
  const [audioEl,setAudioEl] = useState(new Audio(
    ""
  ));

  const [source, setSource] = useState(null);
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.getDetailSong(curSongId),
        apis.getSong(curSongId)
      ]);

      if (curSongId) {
        if (res1.data.err === 0) {
          setSongInfo(res1.data.data);
        }

        if (res2.data.err === 0) {
          setSource(res2.data.data);
        }
      }
    };

    fetchDetailSong();
  }, [curSongId]);

  console.log(isPlaying);

  const handleChangeStatusPlay = () => {
    dispatch(action.changeIsPlaying(!isPlaying));
    if (isPlaying) {
      audioEl.play();
    } else {
      audioEl.pause();
    }
  };
  return (
    <div className="bg-main-400 px-5 h-full border-t border-black/5 flex items-center">
      <div className="w-[30%] flex flex-auto items-center gap-2.5">
        <div className="flex ">
          <img
            src={songInfo?.thumbnail}
            alt=""
            className="flex-shrink-0 w-16 h-16 object-cover rounded-md mr-2.5"
          />
          <div className="flex flex-auto flex-grow flex-shrink flex-col items-start justify-center inter-font">
            <Link className="font-medium text-primary text-[14px] leading-[1.36] pr-2.5">
              {songInfo?.title}
            </Link>

            <Link className="mt-[1px] text-tx-gray text-[11.5px] font-medium inline-block">
              {songInfo?.artistsNames}
            </Link>
          </div>
        </div>
        <div className="flex flex-shrink-0 text-primary">
          <div className="p-2 mx-0.5 flex items-center justify-center">
            <GoHeart size={16} />
          </div>
          <div className="p-2 mx-0.5 flex items-center justify-center">
            <PiDotsThreeBold size={16} />
          </div>
        </div>
      </div>
      <div className="w-[40%] flex-auto">
        <div className="flex justify-center items-center text-primary">
          <button className="p-[7px]  mx-[7px]">
            <PiShuffleLight size={20} />
          </button>
          <button className="p-[7px] mx-[7px]">
            <IoPlaySkipBackSharp size={18} />
          </button>
          <button
            onClick={handleChangeStatusPlay}
            className="group p-[5px] mx-[7px] w-[50px] h-[50px] flex items-center justify-center cursor-pointer"
          >
            <span className="w-[36px] h-[36px] flex items-center justify-center border border-primary rounded-full group-hover:text-secondary group-hover:border-secondary">
              {isPlaying ? (
                <HiPause size={20} />
              ) : (
                <TbPlayerPlayFilled size={18} className="ml-[2px]" />
              )}
            </span>
          </button>
          <button className="p-[7px] mx-[7px]">
            <IoPlaySkipForwardSharp size={18} />
          </button>
          <button className="p-[7px] mx-[7px]">
            <PiRepeatLight size={20} />
          </button>
        </div>
        <div className="h-[18px] mb-[5px]"></div>
      </div>
      <div className="w-[30%] flex-auto">volume</div>
    </div>
  );
};

export default Player;
