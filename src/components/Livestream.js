import React, { useCallback, useRef, useState } from "react";
import Section from "./Section";
import { IconBorderRadio } from "../utils/customIcons";
import { getPercentRadioTime } from "../utils/fn";
import { Swiper, SwiperSlide } from "swiper/react";
import TitleSection from "./TitleSection";
import icons from "../utils/icons";
import { useDispatch } from "react-redux";
import * as action from "../store/actions";

const Livestream = ({ data }) => {
  const { items, title } = data;
  const {
    MdOutlineArrowForwardIos,
    TbPlayerPlayFilled,
    MdOutlineArrowBackIos
  } = icons;

  const dispatch = useDispatch();
  const sliderRef = useRef(null);
  const [statuspreBtn, setStatusPerBtn] = useState(false);
  const [statusNextBtn, setStatusNextBtn] = useState(false);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleClick = (item) => {
    dispatch(action.setCurSongId(item.encodeId));
  };
  return (
    <Section className="mt-12 w-[calc(100% + 32px)] -mx-4 relative">
      <TitleSection className="px-4 mb-5">{title}</TitleSection>
      <div className="w-full px-4">
        <Swiper
          key={data.encodeId}
          ref={sliderRef}
          className="w-full"
          spaceBetween={30}
          slidesPerView={3}
          loop={false}
          allowSlidePrev={true}
          allowSlideNext={true}
          allowTouchMove={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
          }}
          tou
          autoplay={{
            delay: 500,
            disableOnInteraction: false
          }}
          speed={800}
          onSlideChange={(swiper) => {
            setStatusNextBtn(swiper.isEnd);
            setStatusPerBtn(swiper.isBeginning);
          }}
          onSwiper={(swiper) => {
            setStatusNextBtn(swiper.isEnd);
            setStatusPerBtn(swiper.isBeginning);
          }}
          breakpoints={{
            900: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 4
            },
            1228: {
              slidesPerView: 5
            },
            1440: {
              slidesPerView: 6
            }
          }}
        >
          {items.map((item) => (
            <>
              {item.program && (
                <SwiperSlide key={item.encodeId}>
                  <div>
                    <div className="relative group">
                      <div className="overflow-hidden rounded-full">
                        <img
                          className="w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                          alt=""
                          src={item.program.thumbnail}
                        />
                      </div>
                      <div className="border-[3px] border-transparent absolute w-full text-white h-full left-0 top-0 rounded-full hidden bg-transparent group-hover:bg-black/50 group-hover:flex items-center justify-center">
                        <div
                          onClick={() => {
                            handleClick(item);
                          }}
                          className="relative z-5 w-[45px] h-[45px] flex items-center justify-center border cursor-pointer border-white rounded-full"
                        >
                          <TbPlayerPlayFilled size={24} className="ml-0.5" />
                        </div>
                      </div>
                      <div className="absolute w-full h-full left-0 top-0 -rotate-90">
                        <IconBorderRadio
                          strokeDashoffset={getPercentRadioTime(
                            item?.program?.hasSongRequest,
                            item.program.startTime,
                            item.program.endTime
                          )}
                        />
                      </div>
                      <div className="w-[36%] h-auto overflow-hidden rounded-full absolute top-[85.3%] left-[85.3%] -translate-x-[60%] -translate-y-[60%]">
                        <img
                          className="w-full object-cover"
                          src={item.host.thumbnail}
                          alt=""
                        />
                      </div>
                      <div className="absolute w-1/4 left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2">
                        <img
                          src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/icons/live-tag.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="mt-5 text-center inter-font">
                      <h3 className="text-[16px] font-semibold text-primary">
                        {item.host.name}
                      </h3>
                      <p className="text-[12px] font-normal text-tx-gray leading-[1.33]">
                        {item.activeUsers} đang nghe
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )}
            </>
          ))}
        </Swiper>
        <button
          disabled={statuspreBtn}
          className={`absolute disabled:bg-tx-gray/60 disabled:cursor-default disabled:text-white/60 flex justify-center items-center left-0 z-20 top-[50%] text-primary font-normal w-[38px] h-[38px] translate-y-[-50%] bg-white rounded-full shadow-btn-allowSlide swiper-button-prev`}
          onClick={handlePrev}
        >
          <MdOutlineArrowBackIos size={18} className="mr-1" />
        </button>
        <button
          disabled={statusNextBtn}
          className={`absolute disabled:bg-tx-gray/60 disabled:cursor-default disabled:text-white/60 flex justify-center items-center right-0 z-20 top-[50%] text-primary w-[38px] h-[38px] translate-y-[-50%] bg-white rounded-full shadow-btn-allowSlide swiper-button-prev`}
          onClick={handleNext}
        >
          <MdOutlineArrowForwardIos size={18} className="ml-1" />
        </button>
      </div>
    </Section>
  );
};

export default Livestream;
