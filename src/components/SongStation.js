import React from 'react'
import { Link } from 'react-router-dom'
import TitleSection from './TitleSection'
import Section from './Section'
import icons from '../utils/icons'

const SongStation = ({data}) => {
  const test2 = [1, 2, 3];
  const {  TbPlayerPlayFilled, GoHeart, PiDotsThreeBold } = icons;
  return (
    <Section className="mt-12">
        <div className="mb-5">
          <span className="text-tx-gray">{data.title}</span>
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
                        <TbPlayerPlayFilled size={24} className="ml-0.5" />
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
  )
}

export default SongStation