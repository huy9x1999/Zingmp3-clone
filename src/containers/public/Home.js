import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "../../components/Section";
import SliderBanner from "../../components/Slider";
import NewRelease from "../../components/NewRelease";
import NewReleaseChart from "../../components/NewReleaseChart";
import WeakChart from "../../components/WeakChart";
import arrayUtitl from "../../utils/arrayUtil";
import RecentPlaylist from "../../components/RecentPlaylist";
import Livestream from "../../components/Livestream";
import { ChartSection } from "../../components";
import PlayListSlice from "../../components/PlaylistSlice";
import * as actions from "../../store/actions";

const Home = () => {
  const { listImgConnect } = arrayUtitl;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getHome());
  }, []);

  const { homeData, isLoadHome } = useSelector((state) => state.app);

  const ListSectionHome = () => {
    return homeData?.map((item, index) => {
      const { items } = item;
      switch (item.sectionType) {
        case "banner":
          return <SliderBanner key={index} data={item} />;
        case "recent":
          return (
            items?.length > 0 && <RecentPlaylist key={index} data={item} />
          );
        case "songStation":
          return (
            items?.length > 0 && <RecentPlaylist key={index} data={item} />
          );
        case "playlist":
          return items?.length > 0 && <PlayListSlice key={index} data={item} />;
        case "new-release":
          return <NewRelease key={index} data={item} />;
        case "newReleaseChart":
          return <NewReleaseChart key={index} data={item} />;
        case "RTChart":
          return <ChartSection key={index} item={item} />;
        case "weekChart":
          return <WeakChart key={index} data={item} />;
        case "livestream":
          return <Livestream key={index} data={item} />;
        default:
          <></>;
          break;
      }
    });
  };
  return (
    <div className="w-full h-full">
      {isLoadHome ? (
        <div>
          <Section className="px-[38px]">
            <div role="status" class="flex gap-8 w-full animate-pulse">
              <div className="h-[160px] bg-gray-400 rounded-lg dark:bg-gray-900 w-full mb-4"></div>
              <div className="h-[160px] bg-gray-400 rounded-lg dark:bg-gray-900 w-full mb-4"></div>
              <div className="hidden 1024:block h-[160px] bg-gray-400 rounded-lg dark:bg-gray-900 w-full mb-4"></div>
            </div>
          </Section>
          <Section className="mt-12 px-[38px] w-full animate-pulse">
            <p className="h-[30px] mb-5 bg-gray-400 rounded dark:bg-gray-900 w-[400px]"></p>
            <div className="grid grid-cols-2 1024:grid-cols-3 1228:grid-cols-4 gap-x-4">
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
            </div>
          </Section>
          <Section className="mt-12 px-[38px] w-full animate-pulse">
            <p className="h-[30px] mb-5 bg-gray-400 rounded dark:bg-gray-900 w-[400px]"></p>
            <div className="grid grid-cols-2 1024:grid-cols-3 1228:grid-cols-4 gap-x-4">
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
            </div>
          </Section>
          <Section className="mt-12 px-[38px] w-full animate-pulse pb-12">
            <p className="h-[30px] mb-5 bg-gray-400 rounded dark:bg-gray-900 w-[400px]"></p>
            <div className="grid grid-cols-2 1024:grid-cols-3 1228:grid-cols-4 gap-x-4">
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
              <div>
                <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
              </div>
            </div>
          </Section>
        </div>
      ) : (
        <>
          {" "}
          <ListSectionHome />
          <Section className="mt-10 px-[38px]">
            <h3 className="uppercase mb-6 text-[12px] text-[#696969] hover:text-secondary text-center font-semibold tracking-widest">
              <span className=" cursor-pointer text-[#696969] hover:text-secondary">
                Đối tác âm nhạc
              </span>
            </h3>
            <div className="grid grid-cols-8 grid-rows-2 items-stretch justify-center gap-x-5">
              {listImgConnect.map((item, index) => (
                <div key={index}>
                  <figure className="bg-white rounded-lg flex items-center justify-center h-[57%]">
                    <img
                      className="max-w-[90%] max-h-[80%]"
                      src={item}
                      alt=""
                    />
                  </figure>
                </div>
              ))}
            </div>
          </Section>
        </>
      )}

      {/*
      <Section className="mt-12">
        <div className="mb-5">
          <span className="text-tx-gray">Bắt đầu nghe từ một bài hát</span>
          <TitleSection>Gợi Ý Dành Riêng Cho Bạn</TitleSection>
        </div>
        <div className="grid grid-cols-3 gap-7">
          {test2.map((item) => (
            <nav className="flex list-none flex-col ">
              {test2.map((item) => (
                <li className="p-2.5 hover:bg-[#FFFFFF4D] rounded group flex items-center">
                  <div className="flex items-center group-hover:w-3/5 group-hover:flex-grow-0 cursor-pointer">
                    <div className="mr-2.5 rounded overflow-hidden relative group">
                      <img
                        className="object-cover w-[60px] h-[60px]"
                        src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/d/7/e/2/d7e22128feca72a9328b1774d33afb66.jpg"
                        alt=""
                      />
                      <div className="hidden group-hover:flex text-white absolute top-0 left-0 w-full h-full z-5 bg-black/40 items-center justify-around">
                        <TbPlayerPlayFilled size={20} className="ml-1" />
                      </div>
                    </div>
                    <div className="group-hover:w-7/12">
                      <Link
                        to="/"
                        className="text-[15px] leading-5 text-primary font-medium hover:text-secondary block overflow-hidden max-w-full text-overflow-1-line"
                      >
                        Tình đầu vẫn là tình yêu đẹp
                      </Link>
                      <p className="mt-[3px] text-[13px] leading-[18px] text-overflow-1-line text-tx-gray">
                        <Link to="" className="pr-[3px] hover:underline">
                          T.R.I,
                        </Link>
                        <Link to="" className="hover:underline">
                          Cammie
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="hidden group-hover:flex items-center justify-end flex-grow">
                    <button className="p-1.5 mx-1">
                      <GoHeart size={16} className="m-[4px]" />
                    </button>
                    <button className="p-1.5 mx-1">
                      <PiDotsThreeBold size={20} className="m-[4px]" />
                    </button>
                  </div>
                </li>
              ))}
            </nav>
          ))}
        </div>
      </Section>
      <PlayList title="Có thể bạn muốn nghe" />
      <NewRelease />
      <PlayList
        title="Chill"
        sortDescription="Nhẹ nhàng đong đưa theo nhịp điệu của Jazz Việt"
      />
      <PlayList
        title="Nhạc Remix Cực Bốc"
        sortDescription="Lắc lư với những bản Remix hot nhất mạng xã hội"
      />
      <PlayList
        title="Tâm Trạng Hơi Suy"
        sortDescription="Dành cả thanh xuân bên nhau, vậy mà chẳng thể cùng nhau đi đến cuối con đường"
      />
      <NewReleaseChart />
      <WeakChart />
      <PlayList title="top 100" />
      <PlayList title="Dành cho fan" />
      <PlayList title="Album hot" />
       */}
    </div>
  );
};

export default Home;
