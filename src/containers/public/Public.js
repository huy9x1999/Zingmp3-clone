import React, { useCallback, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Header, SidebarLeft, SidebarRight, Player } from "../../components";
import { useSelector } from "react-redux";

const Public = () => {
  const stickyRef = useRef(null);
  const { curSongId } = useSelector((state) => state.music);

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
    <div className="w-full relative h-screen overflow-y-auto bg-[#ced9d9]">
      <div
        className={`w-full flex ${
          curSongId ? "h-[calc(100%-90px)]" : "h-full"
        } relative`}
      >
        <div className="w-[240px] flex-none">
          <SidebarLeft />
        </div>
        <div className="w-[calc(100%-240px)] -mr-1.5 1600:w-[calc(100%-569px)]">
          <div
            onScroll={() => hanldeCheckSticky(stickyRef)}
            className="relative w-full h-full overflow-y-scroll scroll-container"
          >
            <div
              ref={stickyRef}
              className="sticky z-[100] w-full top-0 left-0 right-0 h-[70px] flex items-center mb-8 px-[59px]"
            >
              <Header />
            </div>
            <div className="w-full px-[59px] h-full">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="absolute z-[100] hidden right-0 top-0 w-[329px] bg-green-300 1600:flex h-screen flex-none border border-green-500 animate-slide-left pb-[90px]">
          <SidebarRight />
        </div>
      </div>
      {curSongId && (
        <div className="relative flex-none h-[90px] z-[100]">
          <Player />
        </div>
      )}
    </div>
  );
};

export default Public;
