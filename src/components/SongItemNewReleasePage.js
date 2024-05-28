import React from "react";
import { rankStatus } from "../utils/fn";
import ConvertIcon from "../utils/ConvertIcon";
import icons from "../utils/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
import SmallThumbPlayMusic from "./SmallThumbPlayMusic";
import { IconPremium } from "../utils/customIcons";

const SongItemNewReleasePage = ({ item, index }) => {
  const { FaCaretDown, FaCaretUp, FiMinus } = icons;
  const { curSongId } = useSelector((state) => state.music);

  const isCheckType = () => {
    if (curSongId === item?.encodeId) return "active";
    if (curSongId === item?.encodeId) return "activeSlideType";
    return "normal";
  };

  return (<div className={`border-b last:border-black/0 border-black/5 ${
    isCheckType() === "active"
      ? "border-black/0"
      : isCheckType() === "activeSlideType"
      ? "border-black/0"
      : "hover:border-black/0"
  }`}>
    <div
      key={item?.encodeId}
      className={`p-2.5 group flex rounded-[5px] min-h-[46px] ${
        isCheckType() === "active"
          ? "bg-white/30"
          : isCheckType() === "activeSlideType"
          ? "bg-third"
          : "hover:bg-white/30"
      }`}
    >
      <div className="flex items-center flex-shrink-0 flex-grow-0 w-1/2">
        <div className="flex mr-[15px]">
          <span
            className={`w-[60px] text-center block mr-[5px] roboto-font text-[32px] text-transparent leading-[1] font-[900]  text-stock text-stock-${
              index + 1
            }`}
          >
            {index + 1}
          </span>
          <div className="text-[12px] font-bold flex item-center justify-center">
            {item?.rakingStatus === 0 ? (
              <span
                className={`text-[${
                  rankStatus(item?.rakingStatus).color
                }] flex items-center justify-center`}
              >
                <FiMinus size={18} />
              </span>
            ) : (
              <div className="flex flex-col item-center justify-center">
                <span
                  className={`w-[18px] h-[18px]`}
                >
                  {rankStatus(item?.rakingStatus).icon === "up" && (
                    <FaCaretUp color={rankStatus(item?.rakingStatus).color} size={18} />
                  )}
                  {rankStatus(item?.rakingStatus).icon === "down" && (
                    <FaCaretDown color={rankStatus(item?.rakingStatus).color} size={18} />
                  )}
                </span>
                <span className="w-[18px] h-[18px] text-center">
                  {rankStatus(item?.rakingStatus).number}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="flex">
          <div className="group w-10 h-10 flex-grow-0 flex-shrink-0 overflow-hidden rounded relative mr-2.5">
            <SmallThumbPlayMusic
              item={item}
              hideBtnPlay={item?.streamingStatus === 2}
            />
          </div>
          <div>
            <h4 className="flex justify-start items-start text-primary">
              <span className=" text-[14px] font-medium mb-[3px] leading-[1.3]">
                <span className="flex gap-2 items-center justify-start">
                  <span className="text-overflow-1-line">{item?.title}</span>
                  {item?.streamingStatus === 2 && (
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
              } leading-none text-[12px] text-overflow-1-line`}
            >
              {item?.artists ? (
                item?.artists.map((artist, index) => {
                  if (index === item?.artists?.length - 1) {
                    return (
                      <Link
                        key={index}
                        to={artist?.link}
                        className="pr-[3px] hover:underline"
                      >
                        {artist?.name}
                      </Link>
                    );
                  }
                  return (
                    <Link
                      key={index}
                      to={artist?.link}
                      className="pr-[4px] hover:underline"
                    >
                      {artist?.name + `,`}
                    </Link>
                  );
                })
              ) : (
                <Link key={index} className="pr-[3px] hover:underline">
                  {item?.artistsNames}
                </Link>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-shrink flex-grow"><p className="text-[rgba(50,50,61,0.5)] hover:underline text-[12px] font-normal ml-2.5 text-overflow-1-line ">{item?.album?.title}</p></div>
      <div className="flex items-center flex-shrink-0 flex-grow-0">
        <span className="w-5 h-5"></span>
        <span className="uppercase ml-2.5 text-tx-gray text-[12px]">{moment.utc(item?.duration * 1000).format("mm:ss")}</span>
      </div>
    </div>
    </div>
  );
};

export default SongItemNewReleasePage;
