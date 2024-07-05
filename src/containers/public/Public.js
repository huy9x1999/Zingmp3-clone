import React, { useCallback, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, SidebarLeft, SidebarRight, Player } from "../../components";
import { useSelector } from "react-redux";

const Public = () => {
  const stickyRef = useRef(null);
  const { curSongId } = useSelector((state) => state.music);
  const [isShowRightSlidebar, setIsShowSlidebar] = useState(false);

  const hanldeCheckSticky = useCallback((sticky) => {
    if (sticky.current.offsetTop > 5) {
      stickyRef.current.classList.add("bg-[rgba(206,217,217,0.8)]");
      stickyRef.current.classList.add("shadow-lg");
    } else {
      sticky.current.classList.remove("bg-[rgba(206,217,217,0.8)]");
      sticky.current.classList.remove("shadow-lg");
    }
  }, []);

  return (
    <div className="w-full relative h-screen bg-body overflow-hidden">
      <div
        className={`w-full flex ${
          curSongId ? "h-[calc(100%-90px)]" : "h-full"
        } relative`}
      >
        <div className="w-[70px] 1228:w-[240px] flex-none">
          <SidebarLeft />
        </div>
        <div
          className={`w-[calc(100%-70px)] 1228:w-[calc(100%-240px)] -mr-1.5 transition-width ease-in-out ${
            isShowRightSlidebar
              ? "1600:w-[calc(100%-569px)]"
              : "1600:w-[calc(100%-240px)]"
          }`}
        >
          <div
            onScroll={() => hanldeCheckSticky(stickyRef)}
            className="relative w-full h-full overflow-y-scroll scroll-container"
          >
            <div
              ref={stickyRef}
              className="sticky z-[100] w-full top-0 left-0 right-0 h-[70px] flex items-center mb-8  px-7 1024:px-[59px]"
            >
              <Header />
            </div>
            <div className="w-full px-7 1024:px-[59px] h-full">
              <Outlet />
            </div>
          </div>
        </div>
        {isShowRightSlidebar && (
          <div
            className={`absolute z-[100] right-0 top-0 w-[329px] bg-body 1600:flex h-screen flex-none animate-slide-left pb-[90px] shadow-sidebar-right`}
          >
            <SidebarRight handleChangeSliderbarRight={(e)=>setIsShowSlidebar(e)} />
          </div>
        )}
      </div>
      {curSongId && (
        <div className="relative flex-none h-[90px] z-[100]">
          <Player
            setIsShowSlidebar={setIsShowSlidebar}
            isShowRightSlidebar={isShowRightSlidebar}
          />
        </div>
      )}
    </div>
  );
};

export default Public;
