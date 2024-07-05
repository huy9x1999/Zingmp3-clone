import React from "react";
import SmallThumbPlayMusic from "./SmallThumbPlayMusic";
import { Link } from "react-router-dom";
import icons from "../utils/icons";
import { IconPremium } from "../utils/customIcons";
import { useSelector } from "react-redux";
import moment from "moment";

const SongItem = ({
  item,
  isShuffle,
  index,
  isSlideType,
  className,
  albumId
}) => {
  const { curSongId } = useSelector((state) => state.music);
  const { PiMusicNotesSimpleLight } = icons;

  const isCheckType = () => {
    if (curSongId === item.encodeId && !isSlideType) return "active";
    if (curSongId === item.encodeId && isSlideType) return "activeSlideType";
    return "normal";
  };

  return (
    <div
      key={item.encodeId}
      className={`${
        isSlideType ? "p-2 border-none" : "p-2.5 border-b"
      } group flex rounded-[5px]  border-black/5 min-h-[46px] ${
        isCheckType() === "active"
          ? "bg-white/30"
          : isCheckType() === "activeSlideType"
          ? "bg-third"
          : "hover:bg-white/30"
      }`}
    >
      <div
        className={`flex flex-grow-0 flex-shrink-0 ${
          isSlideType ? "w-full" : "w-1/2"
        } mr-2.5 items-center`}
      >
        {!isSlideType && (
          <div
            className={`mr-[8px] flex-grow-0 flex-shrink-0 ${
              isCheckType() === "activeSlideType"
                ? "text-white"
                : "text-tx-gray "
            } `}
          >
            {isShuffle ? (
              <span className="inline-block text-center min-w-[18px] text-[14px] leading-[1.29] font-medium">
                <PiMusicNotesSimpleLight size={15} />
              </span>
            ) : (
              <span className="inline-block text-center min-w-[18px] text-[14px] leading-[1.29] font-medium">
                {index}
              </span>
            )}
          </div>
        )}

        <div className="flex w-full flex-grow flex-shrink justify-start">
          <div className="group w-10 h-10 flex-grow-0 flex-shrink-0 overflow-hidden rounded relative mr-2.5">
            <SmallThumbPlayMusic
              item={item}
              hideBtnPlay={item.streamingStatus === 2}
              albumId={albumId || null}
            />
          </div>
          <div className="flex flex-col flex-grow flex-shrink ">
            <h4 className="flex justify-start items-start">
              <span
                className={`${
                  isCheckType() === "activeSlideType"
                    ? "text-white"
                    : "text-tx-gray "
                } text-[14px] font-medium mb-[3px] leading-[1.3] !max-w-[230px]`}
              >
                <span className="flex gap-2 items-center justify-start">
                  <span className="text-overflow-1-line">{item.title}</span>
                  {item.streamingStatus === 2 && (
                    <span>
                      <IconPremium />
                    </span>
                  )}
                </span>
              </span>
            </h4>
            <span
              className={`${
                isCheckType() === "activeSlideType"
                  ? "text-white/60"
                  : "text-tx-gray "
              } block leading-none text-[12px] text-overflow-1-line !max-w-[230px]`}
            >
              {item.artists ? (
                item.artists.map((artist, index) => {
                  if (index === item.artists.length - 1) {
                    return (
                      <Link
                        key={index}
                        to={artist.link}
                        className="pr-[3px] hover:underline"
                      >
                        {artist.name}
                      </Link>
                    );
                  }
                  return (
                    <Link
                      key={index}
                      to={artist.link}
                      className="pr-[4px] hover:underline"
                    >
                      {artist.name + `,`}
                    </Link>
                  );
                })
              ) : (
                <Link key={index} className="pr-[3px] hover:underline">
                  {item.artistsNames}
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>
      {!isSlideType && (
        <>
          <div className="flex-grow flex-shrink flex items-center ">
            <span className="text-[rgba(50,50,61,0.5)] hover:underline text-[12px] font-normal ml-2.5 text-overflow-1-line ">
              {item?.album?.title}
            </span>
          </div>
          <div className="flex flex-grow-0 flex-shrink-0 text-right items-center">
            <span className="group-hover:hidden uppercase ml-2.5 text-tx-gray text-[12px]">
              {moment.utc(item?.duration * 1000).format("mm:ss")}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default SongItem;
