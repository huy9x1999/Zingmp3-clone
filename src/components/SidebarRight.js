import React, { useEffect, useState } from "react";
import icons from "../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import SongItem from "./SongItem";
import { apiGetDetailPlaylist } from "../apis";
import * as action from "../store/actions";

const SidebarRight = ({ handleChangeSliderbarRight }) => {
  const { curSongData, curAlbumId, curSongId } = useSelector(
    (state) => state.music
  );

  const { isPlaying } = useSelector((state) => state.app);
  const { ImBin } = icons;
  const [playlist, setPlaylist] = useState(null);
  const [activeTab, setActiveTab] = useState(1);
  const activeTabStyte = "shadow-sidebar-right-tab bg-white/30 text-primary";
  const dispatch = useDispatch();

  const fetchDetailPlaylist = async () => {
    const response = await apiGetDetailPlaylist(curAlbumId);
    if (response?.data?.err === 0) setPlaylist(response?.data?.data);
  };

  useEffect(() => {
    if (curAlbumId) fetchDetailPlaylist();
  }, []);

  useEffect(() => {
    if (curAlbumId && isPlaying) fetchDetailPlaylist();
  }, [curAlbumId]);

  const handleRemoveList = () => {
    dispatch(action.setCurSongId(null));
    handleChangeSliderbarRight(false);
  };
  return (
    <div className="w-full flex flex-col">
      <div className="h-[70px] flex-none flex items-center py-[14px] px-2 gap-2">
        <div className="p-[3px] flex items-center flex-grow flex-shrink rounded-full bg-white/30 text-[12px] text-primary">
          <div
            className={`w-1/2 py-[5px] text-center rounded-full cursor-pointer ${
              activeTab === 1 ? activeTabStyte : ""
            }`}
          >
            Danh sách phát
          </div>
          <div
            className={`w-1/2 py-[5px] text-center rounded-full cursor-pointer ${
              activeTab === 2 ? activeTabStyte : ""
            }`}
          >
            Nghe gần đây
          </div>
        </div>
        <div className="flex-grow-0 flex-shrink-0 p-2 rounded-full bg-white/30 hover:bg-transparent">
          <div onClick={handleRemoveList} className="cursor-pointer">
            <ImBin size={16} />
          </div>
        </div>
      </div>
      <div className="w-full h-[calc(100dvh-160px)] pl-2 pr-[3px] pb-3 overflow-y-scroll  scroll-container">
        {activeTab === 1 && (
          <div className=" flex flex-col w-full">
            {playlist?.song?.items ? (
              playlist?.song?.items.map((item) => {
                if (item.encodeId === curSongId) {
                  return (
                    <>
                      <SongItem
                        item={curSongData}
                        isSlideType
                        albumId={curAlbumId}
                      />
                      <div className="text-primary text-[14px] flex flex-col pt-[15px] pb-[5px] pl-2">
                        <span className=" font-bold">Tiếp theo</span>
                        <span className="text-[#141414]/60">
                          Từ playlist{" "}
                          <span className="text-third font-medium">
                            {playlist?.title}
                          </span>
                        </span>
                      </div>
                      <div></div>
                    </>
                  );
                }
                return (
                  <SongItem item={item} isSlideType albumId={curAlbumId} />
                );
              })
            ) : (
              <>
                <SongItem item={curSongData} isSlideType />
                <div className="text-primary text-[14px] flex flex-col pt-[15px] pb-[5px] pl-2">
                  <span className=" font-bold">Tiếp theo</span>
                  <span className="text-[#141414]/60">
                    Từ playlist{" "}
                    <span className="text-third font-medium">
                      {curSongData?.album?.title}
                    </span>
                  </span>
                </div>
                <div></div>
              </>
            )}
          </div>
        )}
        {activeTab === 2 && <>nghe gần đây</>}
      </div>
    </div>
  );
};

export default SidebarRight;
