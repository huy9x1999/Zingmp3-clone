import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as apis from "../apis";
import { Link } from "react-router-dom";
import icons from "../utils/icons";
import * as action from "../store/actions";
import moment from "moment";

var intervalId;

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

  const { curSongId, atAlbum, listAlbum } = useSelector((state) => state.music);
  const { isPlaying } = useSelector((state) => state.app);

  const dispatch = useDispatch();
  const [audio, setAudio] = useState(new Audio());
  const [songInfo, setSongInfo] = useState(null);
  const [curSeconds, setCurSeconds] = useState(0);
  const thumbRef = useRef();
  const trackRef = useRef();

  useEffect(() => {
    const fetchDetailSong = async () => {
      const [res1, res2] = await Promise.all([
        apis.apiGetDetailSong(curSongId),
        apis.apiGetSong(curSongId)
      ]);

      if (curSongId) {
        if (res1.data.err === 0) {
          setSongInfo(res1.data.data);
        }

        if (res2.data.err === 0) {
          audio.pause();
          setAudio(new Audio(res2.data.data["128"]));
        } else {
          audio.pause();
          setAudio(new Audio(""));
          dispatch(action.changeIsPlaying(false));
          setCurSeconds(0);
          thumbRef.current.style.cssText = `right: 100%`;
        }
      }
    };

    audio.currentTime = 0;
    fetchDetailSong();
  }, [curSongId]);

  useEffect(() => {
    audio.load();
    if (isPlaying && songInfo.streamingStatus !== 2) audio.play();
  }, [audio]);

  useEffect(() => {
    intervalId && clearInterval(intervalId);
    if (isPlaying) {
      intervalId = setInterval(() => {
        let precent =
          Math.round((audio.currentTime * 10000) / songInfo?.duration) / 100;
        thumbRef.current.style.cssText = `right: ${100 - precent}%`;
        setCurSeconds(Math.round(audio.currentTime));
        if (audio.currentTime === songInfo?.duration) {
          audio.pause();
        }
      }, 200);
    }
  }, [audio, isPlaying]);

  const handleChangeStatusPlay = () => {
    if (isPlaying) {
      dispatch(action.changeIsPlaying(false));
      audio.pause();
    } else {
      dispatch(action.changeIsPlaying(true));
      audio.play();
    }
  };

  const handleChangeProgressbar = (e) => {
    const trackRect = trackRef.current.getBoundingClientRect();
    const precent =
      Math.round(((e.clientX - trackRect.left) * 10000) / trackRect.width) /
      100;
    thumbRef.current.style.cssText = `right: ${100 - precent}%`;
    audio.currentTime = (precent * songInfo?.duration) / 100;
    setCurSeconds(Math.round((precent * songInfo?.duration) / 100));
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
            <Link className="font-medium text-primary text-[14px] leading-[1.36] pr-2.5 text-overflow-1-line">
              {songInfo?.title}
            </Link>

            <Link className="mt-[1px] text-tx-gray text-[11.5px] font-medium inline-block text-overflow-1-line-flex">
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
          <button
            disabled={!atAlbum}
            className="disabled:text-tx-gray p-[7px] mx-[7px]"
          >
            <IoPlaySkipBackSharp size={18} />
          </button>
          <button
            onClick={() => handleChangeStatusPlay()}
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
          <button
            disabled={!atAlbum}
            className="disabled:text-tx-gray p-[7px] mx-[7px]"
          >
            <IoPlaySkipForwardSharp size={18} />
          </button>
          <button className="p-[7px] mx-[7px]">
            <PiRepeatLight size={20} />
          </button>
        </div>
        <div className="flex h-[18px] mb-[5px] gap-2.5 text-[12px] text-primary font-medium">
          <span className="flex-shrink-0 flex-grow-0 text-right min-w-[45px] opacity-50">
            {moment.utc(curSeconds * 1000).format("mm:ss")}
          </span>
          <div className="flex-shrink flex-grow flex items-center">
            <div
              ref={trackRef}
              onClick={handleChangeProgressbar}
              className="w-full relative group hover:h-[6px] h-[4px] cursor-pointer rounded-l-full rounded-r-full bg-black/10 overflow-hidden"
            >
              <div
                ref={thumbRef}
                className="absolute top-0 group-hover:h-[6px] left-0 right-full h-[4px] bg-third"
              ></div>
            </div>
          </div>
          <span className="flex-shrink-0 flex-grow-0 text-left bg-yellow-400-0 min-w-[45px] opacity-50">
            {songInfo?.duration
              ? moment.utc(songInfo?.duration * 1000).format("mm:ss")
              : "00:00"}
          </span>
        </div>
      </div>
      <div className="w-[30%] flex-auto">volume</div>
    </div>
  );
};

export default Player;
