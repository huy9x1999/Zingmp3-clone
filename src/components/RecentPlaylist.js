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
              <PlayMusic item={item} />
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
