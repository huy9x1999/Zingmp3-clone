import React from "react";
import { Link } from "react-router-dom";
import TitleSection from "./TitleSection";
import Section from "./Section";
import icons from "../utils/icons";
import PlayMusic from "./PlayMusic";

const RecentPlaylist = (data) => {
  const { items } = data;
  const { MdOutlineArrowForwardIos } = icons;
  return (
    <Section className="mt-12">
      <div className="flex justify-between items-center">
        <TitleSection className="mb-5">{data?.title}</TitleSection>
        <Link
          to="/"
          className="text-[12px] uppercase text-tx-gray font-medium items-center flex"
        >
          Tất cả
          <MdOutlineArrowForwardIos size={12} className="ml-2 -mt-0.5" />
        </Link>
      </div>

      <div className="flex mx-[-12px]">
        {items.map((item) => (
          <div className="mx-3">
            <div className="rounded overflow-hidden relative group cursor-pointer">
              <img
                className="w-full block group-hover:scale-125 transition-transform duration-500 ease-in-out"
                src="https://photo-playlist-zmp3.zmdcdn.me/s2/mixtape?src=HavwqN7EYmrDGr6VBegSG044GDyvm8z0MGH0ts6ErmvTKHkCCuk13mi67jjgtzHJ00r9rphUXb9GK1dG9z771rmMIzjiauuqHn57x6hOqtvGN0khUyIAA0qM2wjjoPCk3HG4h3NBd2nU5Gh-Cyl5TrD6MlCucP4YKaS8pJgVaazNHW_DF9wF5nKI0ujkZSX3GqHSqKnEICHxXR2oagY_R6SYVG&cv=1&size=thumb/240_240"
                alt=""
              />
              <PlayMusic className="hidden group-hover:flex" />
            </div>
            <Link to="/">
              <span className="inter-font text-overflow-2-line mt-3 text-[14px] leading-[1.36] text-primary font-bold capitalize pr-1">
                mixtape van vuong
              </span>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default RecentPlaylist;
