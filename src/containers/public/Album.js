import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import * as apis from "../../apis";
import {
  converNumber,
  getDate,
  getTimeFormMinute,
  getYear
} from "../../utils/fn.js";
import icons from "../../utils/icons";
import TitleSection from "../../components/TitleSection";
import PlayMusic from "../../components/PlayMusic";
import SongItem from "../../components/SongItem";
import { useDispatch, useSelector } from "react-redux";
import * as action from "../../store/actions";

const Album = () => {
  const { pid } = useParams();
  const { playList } = useSelector((state) => state.playList);
  const dispatch = useDispatch();
  const {
    TbPlayerPlayFilled,
    GoHeart,
    PiDotsThreeBold,
    PiSortAscendingThin,
    MdPersonAddAlt
  } = icons;

  useEffect(() => {
    dispatch(action.fetchDetailPlayList(pid));
  }, [pid]);
  console.log(playList?.textType);

  return (
    <div className="pt-2 pb-12">
      <div className="relative">
        <div className="w-[300px] sticky top-[100px] left-0 float-left mb-[30px]">
          <div className="w-full pb-[30px]">
            <div className="relative rounded-lg shadow-[0_5px_8px_0_rgba(0,0,0,.2)] overflow-hidden group">
              <img
                src={playList?.thumbnailM}
                alt=""
                className="w-full object-cover  group-hover:scale-110 transition-transform duration-500 ease-in-out"
              />
              <PlayMusic
                key={playList?.song.items[0].encodeId}
                isPlay={true}
                isHideShowMenu={true}
                encodeId={playList?.song.items[0].encodeId}
                className="hidden group-hover:flex"
              />
            </div>
            <div className="mt-3 text-center">
              <h3 className="text-[20px] font-bold leading-[1.5]">
                {playList?.title}
              </h3>
              {playList?.textType === "Playlist" && (
                <p className="text-tx-gray text-[12px] leading-[1.75]">
                  Cập nhât: {getDate(playList?.contentLastUpdate)}
                </p>
              )}
              <span className="text-tx-gray text-[12px] leading-[1.75]">
                {playList?.artistsNames.split(",").map((item, index) => {
                  return index <
                    playList?.artistsNames.split(",").length - 1 ? (
                    <Link key={index} to="\" className="hover:underline ">
                      {item},{" "}
                    </Link>
                  ) : (
                    <Link key={index} to="\" className="hover:underline">
                      {item}
                    </Link>
                  );
                })}
              </span>
              {playList?.textType !== "Playlist" && (
                <span className="text-tx-gray text-[12px] leading-[1.75]">
                  {" "}
                  • {getYear(playList?.contentLastUpdate)}
                </span>
              )}
              <p className="text-tx-gray text-[12px] leading-[1.75]">
                {playList?.like} người yêu thích
              </p>
            </div>
            <div className="flex flex-col justify-center mt-4">
              <button className="mb-4 py-[9px] px-6 gap-[5px] inline-flex text-center bg-secondary text-white mx-auto justify-center items-center rounded-3xl text-[14px]">
                <TbPlayerPlayFilled size={16} />
                <span>PHÁT TẤT CẢ</span>
              </button>
              <div className="flex justify-center gap-2.5 items-center">
                <div className="cursor-pointer w-[35px] h-[35px] rounded-full bg-white/30 flex justify-center items-center hover:brightness-90 text-primary">
                  <GoHeart size={16} />
                </div>
                <div className="cursor-pointer w-[35px] h-[35px] rounded-full bg-white/30 flex justify-center items-center hover:brightness-90 text-primary">
                  <PiDotsThreeBold size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-[330px]">
          {playList?.textType === "Playlist" && (
            <p className="text-[14px] mb-2.5">
              <span className="text-tx-gray">Lời tựa</span>{" "}
              <span className="text-primary">{playList.description}</span>
            </p>
          )}
          <div className="p-2.5 flex rounded-[5px] border-b border-black/5 min-h-[46px]">
            <div className="flex flex-grow-0 flex-shrink-0 w-1/2 mr-2.5 items-center text-tx-gray text-[12px]">
              <PiSortAscendingThin size={16} />
              <span className="uppercase font-medium ml-2.5">BÀI HÁT</span>
            </div>
            <div className="flex-grow flex-shrink">
              <span className="text-tx-gray text-[12px] font-medium uppercase ml-2.5">
                Album
              </span>
            </div>
            <div className="flex flex-grow-0 flex-shrink-0 text-right items-center text-tx-gray text-[12px]">
              <span className="font-medium uppercase ml-2.5">Thời gian</span>
            </div>
          </div>

          {playList?.song?.items.map((item, index) => (
            <SongItem
              index={index + 1}
              isShuffle={playList?.isShuffle}
              item={item}
              key={item.encodeId}
            />
          ))}
          <div className="mt-2.5">
            {playList?.textType === "Playlist" ? (
              <div className="text-tx-gray text-[14px]">
                <span>{playList?.song?.total} bài</span> •{" "}
                <span>{getTimeFormMinute(playList?.song?.totalDuration)}</span>
              </div>
            ) : (
              <>
                <p className="text-[14px] leading-5 mb-2 mt-5 text-primary capitalize font-bold">
                  Thông tin
                </p>
                <div className="flex text-[13px] leading-[18px]">
                  <div className="flex flex-col mr-4 text-tx-gray gap-2">
                    <p>Số bài hát</p>
                    <p>Ngày phát hành</p>
                    <p>Cung cấp bởi</p>
                  </div>
                  <div className="flex flex-col text-primary gap-2 font-medium">
                    <p>{playList?.song?.items.length}</p>
                    <p>
                      {getDate(
                        playList?.releasedAt <= 0
                          ? playList?.contentLastUpdate
                          : playList?.releasedAt / 1000
                      )}
                    </p>
                    <p>{playList?.distributor}</p>
                  </div>
                </div>
              </>
            )}
          </div>
          {playList?.sections && playList?.sections[0]?.items && (
            <div className="mt-12">
              <TitleSection className="mb-5">
                {playList?.sections[0].title}
              </TitleSection>
              {playList?.sections[0]?.items.map((item, index) => (
                <SongItem
                  index={index + 1}
                  isShuffle={true}
                  item={item}
                  key={item.encodeId}
                />
              ))}
            </div>
          )}
        </div>
        <div className="clear-left mb-12"></div>
      </div>
      {playList?.textType === "Playlist" && (
        <div>
          <TitleSection key={playList.encodeId} className="mb-5">
            Nghệ sĩ tham gia
          </TitleSection>
          <div className="flex gap-7">
            {playList?.artists.map((item) => (
              <div
                key={item.encodeId}
                className="w-full flex flex-col items-center"
              >
                <div className="relative rounded-full overflow-hidden text-center group">
                  <img
                    src={item.thumbnailM}
                    alt=""
                    className="group-hover:scale-125 transition-transform duration-500 ease-in-out"
                  />
                  <PlayMusic
                    key={item.id}
                    isHideShowMenu={true}
                    className="hidden group-hover:flex"
                  />
                </div>
                <span className="capitalize font-medium leading-[1.33] mt-[15px] mb-1 text-center text-[14px] text-primary text-overflow-1-line">
                  {item.name}
                </span>
                <div className="text-[12px] text-tx-gray">
                  <span className="uppercase mr-0.5">
                    {converNumber(600000)}
                  </span>
                  <span>quan tâm</span>
                </div>
                <button className="mx-5 my-[15px] px-[19px] py-1.5 flex gap-1 rounded-full text-[12px] uppercase bg-secondary text-white items-center">
                  <MdPersonAddAlt size={15} />
                  <span>quan tâm</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Album;
