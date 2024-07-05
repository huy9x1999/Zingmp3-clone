import React, { useCallback, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, SidebarLeft, SidebarRight, Player } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

const Public = () => {
  const stickyRef = useRef(null);
  const { curSongId, errMessage } = useSelector((state) => state.music);
  const [isShowRightSlidebar, setIsShowSlidebar] = useState(false);
  const dispatch = useDispatch();

  console.log(errMessage);

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
            <SidebarRight
              handleChangeSliderbarRight={(e) => setIsShowSlidebar(e)}
            />
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

      <div
        class={`${
          errMessage.statue
            ? "visible opacity-100 top-12"
            : "invisible opacity-60 top-[100px]"
        } transition-all ease-in-out duration-500 fixed z-[90000] right-5 flex items-center w-full max-w-sm p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800`}
      >
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
          </svg>
          <span class="sr-only">Warning icon</span>
        </div>
        <div class="ms-3 text-sm font-normal">{errMessage.msg}</div>
        <button
          type="button"
          class="flex-shrink-0 flex-grow-0 ms-auto outline-none -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-warning"
          aria-label="Close"
          onClick={() => {
            dispatch(actions.getErrMessage("", false));
          }}
        >
          <span class="sr-only">Close</span>
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Public;
