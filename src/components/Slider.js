import React, { useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import Section from "./Section";
import * as action from "../store/actions";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import icons from "../utils/icons";
const SliderBanner = ({ data }) => {
  const { items } = data;
  const dispatch = useDispatch();

  const sliderRef = useRef(null);
  const { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } = icons;

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const handleClick = (item) => {
    if (item?.type === 1) {
      dispatch(action.setCurSongId(item.encodeId));
    }
  };

  return (
    <Section className="z-10 flex flex-col w-full relative">
      <Swiper
        ref={sliderRef}
        className="w-full"
        spaceBetween={30}
        loop
        slidesPerView={items.length > 3 ? 3 : items.length}
        allowSlidePrev={items.length > 3}
        allowSlideNext={items.length > 3}
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
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
      >
        {items.map((item) => (
          <SwiperSlide key={item.encodeId}>
            <div key={item.encodeId}>
              <div
                onClick={() => handleClick(item)}
                className="cursor-pointer inline-block text-inherit"
              >
                <img
                  src={item.banner}
                  alt=""
                  className="rounded-[10px] object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        className={`absolute flex justify-center items-center left-[32px] z-20 top-[50%] color-white w-[55px] h-[55px] translate-y-[-50%] bg-[#FFFFFF26] rounded-full shadow-btn-allowSlide swiper-button-prev sm:${
          items.length > 2 ? "block" : "hidden"
        } ${items.length > 3 ? "block" : " hidden"}`}
        onClick={handlePrev}
      >
        <MdOutlineArrowBackIos size={24} color="white" className="mr-1" />
      </button>
      <button
        className={`absolute flex justify-center items-center right-[32px] z-20 top-[50%] color-white w-[55px] h-[55px] translate-y-[-50%] bg-[#FFFFFF26] rounded-full shadow-btn-allowSlide swiper-button-prev sm:${
          items.length > 2 ? "block" : "hidden"
        } ${items.length > 3 ? "block" : " hidden"}`}
        onClick={handleNext}
      >
        <MdOutlineArrowForwardIos size={24} color="white" className="ml-1" />
      </button>
    </Section>
  );
};

export default SliderBanner;
