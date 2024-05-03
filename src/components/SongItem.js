import React from "react";
import SmallThumbPlayMusic from "./SmallThumbPlayMusic";
import { Link } from "react-router-dom";
import icons from "../utils/icons";
import { IconPremium } from "../utils/customIcons";
import { useSelector } from "react-redux";
import moment from "moment";

const SongItem = ({ item, isShuffle, index }) => {
  const { curSongId } = useSelector((state) => state.music);
  const { PiMusicNotesSimpleLight } = icons;
  return (
    <div
      key={item.encodeId}
      className={`p-2.5 group flex rounded-[5px] border-b border-black/5 min-h-[46px] ${
        curSongId === item.encodeId && "bg-white/30"
      }`}
    >
      <div className="flex flex-grow-0 flex-shrink-0 w-1/2 mr-2.5 items-center">
        <div className="mr-[8px] flex-grow-0 flex-shrink-0 text-tx-gray">
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
        <div className="flex flex-grow flex-shrink justify-start">
          <div className="group w-10 h-10 flex-grow-0 flex-shrink-0 overflow-hidden rounded relative mr-2.5">
            <SmallThumbPlayMusic
              item={item}
              hideBtnPlay={item.streamingStatus === 2}
            />
          </div>
          <div className="flex flex-col flex-grow flex-shrink">
            <h4 className="flex justify-start items-start">
              <span className="text-primary text-[14px] font-medium mb-[3px] leading-[1.3]">
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
            <span className="text-tx-gray leading-none text-[12px] text-overflow-1-line">
              <Link to="\" className="hover:underline leading-[1.15] ">
                {item.artistsNames}
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="flex-grow flex-shrink flex items-center ">
        <span className="text-[rgba(50,50,61,0.5)] hover:underline text-[12px] font-normal ml-2.5 text-overflow-1-line ">
          {item?.album?.title}
        </span>
      </div>
      <div className="flex flex-grow-0 flex-shrink-0 text-right items-center">
        <span className="group-hover:hidden uppercase ml-2.5 text-tx-gray text-[12px]">
          {moment.utc(item?.duration).format('mm:ss')}
        </span>
      </div>
    </div>
  );
};

export default SongItem;
