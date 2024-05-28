import React from "react";
import logo from "../assets/logo.svg";
import {
  clientCreateSidebarMenu,
  sidebarFirstMenu,
  sidebarSecondaryMenu,
  sidebarThirdMenu
} from "../utils/menu";
import NavLinkSidebar from "./NavLinkSidebar";
import { NavLink } from "react-router-dom";
import { IconAddPlus } from "../utils/customIcons";
import path from "../utils/path";
import { useNavigate } from "react-router-dom";

const notActiveStyle =
  "border-l-[3px] border-transtion py-3 px-[21px] font-semibold text-primary/90 hover:text-secondary text-[14px] flex gap-3 items-center";
const activeStyle =
  "border-l-[3px] border-secondary py-3 px-[21px] bg-[hsla(0,0%,100%,0.3)] font-semibold text-secondary text-[14px] flex gap-3 items-center";

const SidebarLeft = () => {
  const navigate = useNavigate();

  return (
    <div className="flex relative h-full flex-col bg-[hsla(0,0%,100%,0.3)] 1228:w-[240px]">
      <div className="pb-4 relative after:w-[100% - 50px] after:left-[25px] after:right-[25px]  after:bg-[#000]/10 after:h-[1px] after:absolute after:bottom-0">
        <div
          onClick={() => navigate(path.HOME)}
          className="w-[70px] 1228:w-full h-[70px] 1228:py-[15px] 1228:pr-[25px] 1228:pl-[27px] flex justify-center 1228:justify-start items-center cursor-pointer"
        >
          <img
            src={logo}
            alt="logo"
            className="hidden 1228:block w-[120px] h-10 mb-[3px] object-contain"
          />
          <img
            src="	https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.10.31/static/media/icon_zing_mp3_60.f6b51045.svg"
            className="block 1228:hidden w-[45px] h-[45px] mb-[3px] object-contain"
            alt="logo"
          />
        </div>
        <nav className="inter-font">
          {sidebarFirstMenu.map((item, index) => (
            <NavLinkSidebar
              key={index}
              activeStyle={activeStyle}
              item={item}
              notActiveStyle={notActiveStyle}
              isCheck
            />
          ))}
        </nav>
      </div>
      <div className="grow overflow-y-scroll  1228:mb-[54px] scroll-container relative  after:w-[100% - 50px] after:left-[25px] after:right-[25px]">
        <div className="sticky top-0 left-[10px] right-[10px] w-[100% - 20px] h-[20px] bg-gradient-to-b from-[#dde4e4] from-10% via-[#dde4e4]/90 via-60% to-transparent to-100%"></div>
        <div className="mt-[-5px]">
          <nav className="inter-font mb-4">
            {sidebarSecondaryMenu.map((item, index) => (
              <NavLinkSidebar
                isCheck
                key={index}
                activeStyle={activeStyle}
                item={item}
                notActiveStyle={notActiveStyle}
              />
            ))}
          </nav>
          <div className="hidden 1228:flex flex-col items-center ml-5 mr-[15px] mb-[15px] bg-linear-add px-2 py-[15px] rounded-lg inter-font font-semibold">
            <span className="text-white text-center block text-xs mb-2.5 leading-[1.67]">
              Nghe nhạc không quảng cáo cùng kho nhạc PREMIUM
            </span>
            <a
              className="rounded-[50px] text-center px-[16px] py-1.5 bg-[#ffdb00] text-xs uppercase"
              href="/"
              target="_blank"
            >
              NÂNG CẤP TÀI KHOẢN
            </a>
          </div>
          <nav className="inter-font mb-4 pb-4 relative after:w-[100% - 50px] after:left-[25px] after:right-[25px]  after:bg-[#000]/10 after:h-[1px] after:absolute after:bottom-0">
            {sidebarThirdMenu.map((item, index) => (
              <NavLinkSidebar
                key={index}
                activeStyle={activeStyle}
                item={item}
                notActiveStyle={notActiveStyle}
              />
            ))}
          </nav>
          <nav className="hidden 1228: inter-font my-4">
            {clientCreateSidebarMenu.map((item, index) => (
              <NavLink
                end={item.end}
                key={index}
                to={item.path}
                className="border-l-[3px] border-transtion py-[5.5px] px-[21px] font-semibold text-primary/90 hover:text-secondary text-[14px] flex gap-3 items-center"
              >
                <span>{item.text}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      <div className=" absolute hidden 1228:flex items-center justify-start border-t w-full border-neutral-400 px-6 h-[54px] bottom-0 left-0">
        <IconAddPlus size={24} />
        <button className="ml-3 block font-semibold text-primary/90 hover:text-secondary text-[14.5px]">
          Tạo playlist mới
        </button>
      </div>
    </div>
  );
};

export default SidebarLeft;
