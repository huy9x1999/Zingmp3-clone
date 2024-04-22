import React, { useState } from "react";
import Section from "./Section";
import TitleSection from "./TitleSection";
import { Link } from "react-router-dom";
import icons from "../utils/icons";
import { chunkArray } from "../utils/fn";
import { useDispatch } from "react-redux";
import * as action from "../store/actions";

const NewRelease = ({ data }) => {
  const {
    items: { all, others, vPop },
    title,
    link
  } = data;

  const { MdOutlineArrowForwardIos, TbPlayerPlayFilled, PiDotsThreeBold } = icons;
  const [active, setActive] = useState(0);

  const handleChangeActive = (position) => {
    setActive(position);
  };

  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(action.setCurSongId(item.encodeId));
    console.log(item);
  };

  const Item = ({ item }) => {
    return (
      <li
        key={item.encodeId}
        className="p-2.5 hover:bg-[#FFFFFF4D] rounded group flex items-center"
      >
        <div className="flex items-center group-hover:w-4/5 group-hover:flex-grow-0 cursor-pointer">
          <div className="mr-2.5 rounded overflow-hidden relative group flex-shrink-0">
            <img
              className="object-cover w-[60px] h-[60px]"
              src={item.thumbnailM}
              alt=""
            />
            <div
              onClick={() => handleClick(item)}
              className="hidden group-hover:flex text-white absolute top-0 left-0 w-full h-full z-5 bg-black/40 items-center justify-around"
            >
              <TbPlayerPlayFilled size={20} className="ml-0.5" />
            </div>
          </div>
          <div className="group-hover:w-7/12 flex flex-col flex-grow">
            <Link
              to={item.link}
              className="group-hover:pr-0 pr-4 text-[15px] leading-5 font-medium text-primary hover:text-secondary block overflow-hidden max-w-full text-overflow-1-line"
            >
              {item.title}
            </Link>
            <p className="group-hover:pr-0 pr-4 mt-[3px] text-[13px] leading-[18px] text-overflow-1-line text-tx-gray">
              {item.artistsNames.split(",").map((text, index) => {
                if (index === item.artistsNames.split(",").length - 1) {
                  return (
                    <Link key={index} to="" className="pr-[3px] hover:underline">
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
            <p className="mt-[3px] text-[13px] leading-[18px] text-overflow-1-line text-tx-gray">
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
      <div className="grid grid-cols-3 gap-7">
        {active === 0 && (
          <>
            {chunkArray(all, 4)
              .map((item, index) => (
                <nav key={index} className="flex list-none flex-col ">
                  {item.map((item) => (
                    <Item item={item} key={item.encodeId} />
                  ))}
                </nav>
              ))
              .slice(0, 3)}
          </>
        )}
        {active === 1 && (
          <>
            {chunkArray(vPop, 4)
              .map((item, index) => (
                <nav key={index} className="flex list-none flex-col ">
                  {item.map((item) => (
                    <Item item={item} key={item.encodeId} />
                  ))}
                </nav>
              ))
              .slice(0, 3)}
          </>
        )}
        {active === 2 && (
          <>
            {chunkArray(others, 4)
              .map((item, index) => (
                <nav key={index} className="flex list-none flex-col ">
                  {item.map((item) => (
                    <Item item={item} key={item.encodeId} />
                  ))}
                </nav>
              ))
              .slice(0, 3)}
          </>
        )}
      </div>
    </Section>
  );
};

export default NewRelease;
