import React, { useCallback, useRef } from "react";
import Section from "./Section";
import TitleSection from "./TitleSection";
import { Link } from "react-router-dom";
import icons from "../utils/icons";
import { Swiper, SwiperSlide } from "swiper/react";

const NewReleaseChart = ({ data }) => {
  const { items, link } = data;
  const { MdOutlineArrowForwardIos, TbPlayerPlayFilled, MdOutlineArrowBackIos } = icons;

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Section className="w-[calc(100% + 32px)] -mx-4 mt-12">
      <div className="flex items-center justify-between mb-5 px-4">
        <TitleSection>BXH Nhạc Mới</TitleSection>
        <Link to={link} className="text-tx-gray font-medium items-center flex">
          <span className="text-[12px] uppercase">Tất cả</span>
          <MdOutlineArrowForwardIos size={12} className="ml-2 -mt-0.5" />
        </Link>
      </div>

      <div className="w-full z-10 flex flex-col relative px-4">
        <Swiper
          ref={sliderRef}
          className="w-full"
          spaceBetween={28}
          loop
          slidesPerView={3}
          allowSlidePrev
          allowSlideNext
          allowTouchMove={true}
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
          onSlideChange={() => {}}
          onSwiper={(swiper) => {}}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.encodeId}>
              <div key={item.encodeId}>
                <div className="flex p-[5px] rounded shadow-btn-newLeaseChart bg-white/30 text-primary cursor-pointer">
                  <div className="flex items-center text-left rounded-[5px] p-2.5 gap-2.5">
                    <div className="flex-grow-0 flex-shrink-0 relative overflow-hidden rounded-[5px] group w-[120px] h-[120px]">
                      <img
                        src={item.thumbnailM}
                        alt=""
                        className="object-cover block w-full group-hover:scale-110 transition-transform duration-500 ease-in-out"
                      />
                      <div className="hidden group-hover:flex text-white absolute top-0 left-0 w-full h-full z-5 bg-black/40 items-center justify-around">
                        <div className="w-[45px] h-[45px] flex items-center justify-center border cursor-pointer border-white rounded-full">
                          <TbPlayerPlayFilled size={24} className="ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow  flex flex-col justify-between items-start h-full">
                      <div>
                        <Link to="/">
                          <span className="inter-font text-overflow-2-line text-[14px] leading-[1.36] text-primary font-bold capitalize pr-1">
                            {item.title}
                          </span>
                        </Link>

                        <p className="mt-[3px] text-[13px] leading-[18px] text-overflow-2-line text-tx-gray">
                          {item.artistsNames.split(",").map((text, index) => {
                            if (
                              index ===
                              item.artistsNames.split(",").length - 1
                            ) {
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
                      </div>
                      <div>
                        <span className="roboto-font text-[40px] opacity-40 text-transparent leading-[1] font-[900] main-text-stock">
                          #{index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          className={`absolute flex justify-center items-center left-0 z-20 top-[50%] text-primary font-normal w-[38px] h-[38px] translate-y-[-50%] bg-white rounded-full shadow-btn-allowSlide swiper-button-prev sm:${
            items.length > 2 ? "block" : "hidden"
          } ${items.length > 3 ? "block" : " hidden"}`}
          onClick={handlePrev}
        >
          <MdOutlineArrowBackIos size={18} color="black" className="mr-1" />
        </button>
        <button
          className={`absolute flex justify-center items-center right-0 z-20 top-[50%] text-primary w-[38px] h-[38px] translate-y-[-50%] bg-white rounded-full shadow-btn-allowSlide swiper-button-prev sm:${
            items.length > 2 ? "block" : "hidden"
          } ${items.length > 3 ? "block" : " hidden"}`}
          onClick={handleNext}
        >
          <MdOutlineArrowForwardIos size={18} className="ml-1" />
        </button>
      </div>
    </Section>
  );
};

export default NewReleaseChart;
