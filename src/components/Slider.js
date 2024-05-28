import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import Section from "./Section";
import * as action from "../store/actions";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import SwiperCore, { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import icons from "../utils/icons";
const SliderBanner = ({ data }) => {
  const { items } = data;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sliderRef = useRef(null);
  const { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } = icons;

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slideNext();
  }, []);

  const handleClick = (item) => {
    if (item?.type === 1) {
      dispatch(action.changeIsPlaying(true));
      dispatch(action.setCurSongId(item.encodeId));
      dispatch(action.playAlbum(false));
    } else if (item?.type === 3 || item?.type === 4) {
      const albumPath = item?.link.split(".")[0];
      navigate(albumPath);
      dispatch(action.playAlbum(true));
    } else {
      dispatch(action.playAlbum(false));
    }
  };

  return (
    <Section className="z-10 flex flex-col w-full relative">
      <Swiper
        className="w-full"
        spaceBetween={30}
        loop
        slidesPerView={2}
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
        onSlideChange={() => {}}
        onSwiper={(swiper) => {
          sliderRef.current = swiper;
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3
          }
        }}
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
        className={`absolute flex justify-center items-center left-[32px] z-20 top-[50%] color-white w-[55px] h-[55px] translate-y-[-50%] bg-[#FFFFFF26] rounded-full shadow-btn-allowSlide swiper-button-prev`}
        onClick={handlePrev}
      >
        <MdOutlineArrowBackIos size={24} color="white" className="mr-1" />
      </button>
      <button
        className={`absolute flex justify-center items-center right-[32px] z-20 top-[50%] color-white w-[55px] h-[55px] translate-y-[-50%] bg-[#FFFFFF26] rounded-full shadow-btn-allowSlide swiper-button-prev`}
        onClick={handleNext}
      >
        <MdOutlineArrowForwardIos size={24} color="white" className="ml-1" />
      </button>
    </Section>
  );
};

export default SliderBanner;
