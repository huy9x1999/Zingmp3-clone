import React from "react";
import Section from "./Section";
import TitleSection from "./TitleSection";
import { Link, NavLink } from "react-router-dom";
import PlayMusic from "./PlayMusic";
import icons from "../utils/icons";
import { useDispatch } from "react-redux";
import * as action from "../store/actions";
import { Swiper, SwiperSlide } from "swiper/react";

const PlayListSlice = ({ data }) => {
  const { MdOutlineArrowForwardIos } = icons;
  const { items, title } = data;

  const dispatch = useDispatch();

  const handleClick = (item) => {
    if (item?.type === 1) {
      dispatch(action.setCurSongId(item.encodeId));
      dispatch(action.playAlbum(true));
    }
  };
  return (
    <Section className="mt-12">
      <div className="flex items-center justify-between mb-5">
        <TitleSection>{title}</TitleSection>
        {data?.link && (
          <Link
            key={data?.link}
            to={data?.link}
            className="text-tx-gray font-medium items-center flex"
          >
            <span className="text-[12px] uppercase">Tất cả</span>
            <MdOutlineArrowForwardIos size={12} className="ml-2 -mt-0.5" />
          </Link>
        )}
      </div>
      <div>
        <Swiper
          className="w-full"
          spaceBetween={30}
          slidesPerView={3}
          allowTouchMove={false}
          breakpoints={{
            1140: {
              slidesPerView: 4
            },
            1334:{
              slidesPerView: 5
            }
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.encodeId}>
              <NavLink
                to={item.link.split(".")[0]}
                className="block relative group overflow-hidden rounded"
              >
                <div className="" onClick={() => handleClick(item.encodeId)}>
                  <PlayMusic isPlay item={item} />
                </div>
              </NavLink>
              <div className="mt-3">
                {item.sortDescription ? (
                  <p className="mt-[3px] text-[13px] leading-[18px] text-overflow-2-line text-tx-gray">
                    {item.sortDescription}
                  </p>
                ) : (
                  <>
                    <Link to="/">
                      <span className="inter-font text-overflow-2-line text-[14px] leading-[1.36] text-primary font-bold capitalize pr-1">
                        {item.title}
                      </span>
                    </Link>
                    <p className="mt-[3px] text-[13px] leading-[18px] text-overflow-1-line text-tx-gray">
                      {item.artistsNames.split(",").map((text, index) => {
                        if (index === item.artistsNames.split(",").length - 1) {
                          return (
                            <Link
                              key={index}
                              to=""
                              className="pr-[3px] hover:underline"
                            >
                              {text}
                            </Link>
                          );
                        }
                        return (
                          <Link
                            key={index}
                            to=""
                            className="pr-[4px] hover:underline"
                          >
                            {text + `,`}
                          </Link>
                        );
                      })}
                    </p>
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};

export default PlayListSlice;
