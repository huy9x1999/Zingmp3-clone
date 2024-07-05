import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import SongItemNewReleasePage from "../../components/SongItemNewReleasePage";

const NewReleasePage = () => {
  const dispatch = useDispatch();
  const { newReleaseChartData,isLoadNewRelease} = useSelector((state) => state.app);
  // const { banner, title } = newReleaseChartData;
  useEffect(() => {
    dispatch(actions.getNewReleaseChart());
  }, []);

  return (
    <div className="pb-[50px]">
      <div className="pt-5 w-full">
        <img
          src={newReleaseChartData?.banner}
          alt={newReleaseChartData?.title}
          className="w-full object-cover"
        />
        <h2 className="mt-12 text-primary text-[40px] font-bold capitalize leading-[49px]  mb-8">
          {newReleaseChartData?.title
            ? newReleaseChartData?.title
            : "BXH Nhạc Mới"}
        </h2>
      </div>
      <div className="mb-5">
        {isLoadNewRelease ? (
          <div className="flex flex-col pt-1 animate-pulse">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="w-full h-10 mb-3 flex items-center">
                <div className="flex w-1/2">
                  <div className="flex-shrink-0 flex-grow-0 w-10 h-10 bg-gray-400 rounded dark:bg-gray-900"></div>
                  <div className="ml-3 flex-grow flex-shrink">
                    <p className="w-[60%] mt-1 mb-2 h-2.5 bg-gray-400 rounded dark:bg-gray-900"></p>
                    <p className="w-[40%] h-2 bg-gray-400 rounded dark:bg-gray-900"></p>
                  </div>
                </div>
                <div className="flex w-1/2 items-center justify-between">
                  <p className="w-20 h-4 bg-gray-400 rounded dark:bg-gray-900"></p>
                  <p className="w-8 h-4 rounded-md bg-gray-400 dark:bg-gray-900"></p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          newReleaseChartData?.items?.map((item, index) => (
            <SongItemNewReleasePage
              index={index}
              item={item}
              key={item?.encodeId}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NewReleasePage;
