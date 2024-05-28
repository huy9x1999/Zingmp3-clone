import React, { useEffect, useState } from "react";
import Section from "./Section";
import TitleSection from "./TitleSection";
import { Link } from "react-router-dom";
import icons from "../utils/icons";
import { chunkArray } from "../utils/fn";
import SmallThumbPlayMusic from "./SmallThumbPlayMusic";
import { IconPremium } from "../utils/customIcons";
import { useWindowSize } from "@uidotdev/usehooks";

const NewRelease = ({ data }) => {
  const width = window.innerWidth;

  const size = useWindowSize();

  const {
    items: { all, others, vPop },
    title,
    link
  } = data;

  const { MdOutlineArrowForwardIos, PiDotsThreeBold } = icons;
  const [active, setActive] = useState(0);

  const handleChangeActive = (position) => {
    setActive(position);
  };

  const Item = ({ item }) => {
    return (
      <li
        key={item.encodeId}
        className="p-2.5 hover:bg-[#FFFFFF4D] rounded group flex items-center"
      >
        <div className="flex items-center group-hover:w-4/5 group-hover:flex-grow-0 cursor-pointer">
          <div className=" mr-2.5 rounded overflow-hidden relative group flex-shrink-0">
            <div className="w-[60px] h-[60px]">
              <SmallThumbPlayMusic notAtAlbum={true} item={item} />
            </div>
          </div>
          <div className="group-hover:w-7/12 flex flex-col flex-grow">
            <span className="leading-[18px] flex gap-2 items-center justify-start">
              <Link to="/" className="text-overflow-1-line">
                {item.title}
              </Link>
              {item.streamingStatus === 2 && (
                <span>
                  <IconPremium />
                </span>
              )}
            </span>
            <p className="group-hover:pr-0 pr-4 mt-[2px] text-[12px] leading-[16px] text-overflow-1-line text-tx-gray">
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
                  <Link key={index} to="" className="pr-[4px] hover:underline">
                    {text + `,`}
                  </Link>
                );
              })}
            </p>
            <p className="mt-[2px] text-[12px] leading-[1.33] text-overflow-1-line text-tx-gray">
              Hôm nay
            </p>
          </div>
        </div>
        <div className="hidden group-hover:flex items-center justify-end flex-grow">
          <button className="p-1.5 mx-1">
            <PiDotsThreeBold size={20} className="m-[4px]" />
          </button>
        </div>
      </li>
    );
  };

  const activeStyleButton = "bg-secondary border-secondary text-white";
  const normalStyleButton = "text-primary border-black/10 bg-transparent";
  return (
    <Section className="mt-12">
      <div className="flex items-end justify-between mb-4">
        <div>
          <div>{width}</div>
          <TitleSection className="mb-5">{title}</TitleSection>
          <div className=" flex justify-start items-center gap-[15px]">
            <button
              className={`uppercase outline-none px-6 py-1 text-[12px] inline-block  h-[25px] rounded-[100px] border ${
                active === 0 ? activeStyleButton : normalStyleButton
              }`}
              onClick={() => handleChangeActive(0)}
            >
              Tất cả
            </button>
            <button
              className={`uppercase outline-none px-6 py-1 text-[12px] inline-block  h-[25px] rounded-[100px] border ${
                active === 1 ? activeStyleButton : normalStyleButton
              }`}
              onClick={() => handleChangeActive(1)}
            >
              Việt Nam
            </button>
            <button
              className={`uppercase outline-none px-6 py-1 text-[12px] inline-block  h-[25px] rounded-[100px] border ${
                active === 2 ? activeStyleButton : normalStyleButton
              }`}
              onClick={() => handleChangeActive(2)}
            >
              Quốc Tế
            </button>
          </div>
        </div>
        <Link to={link} className="text-tx-gray font-medium items-center flex">
          <span className="text-[12px] uppercase">Tất cả</span>
          <MdOutlineArrowForwardIos size={12} className="ml-2 -mt-0.5" />
        </Link>
      </div>
      <div className="grid grid-cols-2 1228:grid-cols-3 gap-x-7">
        {active === 0 && (
          <>
            {all
              ?.map((item) => <Item item={item} key={item.encodeId} />)
              .slice(0, size.width >= 1228 ? 12 : 8)}
          </>
        )}
        {active === 1 && (
          <>
            {vPop
              ?.map((item) => <Item item={item} key={item.encodeId} />)
              .slice(0, size.width >= 1228 ? 12 : 8)}
          </>
        )}
        {active === 2 && (
          <>
            {others
              ?.map((item) => <Item item={item} key={item.encodeId} />)
              .slice(0, size.width >= 1228 ? 12 : 8)}
          </>
        )}
      </div>
    </Section>
  );
};

export default NewRelease;
