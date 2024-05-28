import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import SongItemNewReleasePage from "../../components/SongItemNewReleasePage";

const NewReleasePage = () => {
  const dispatch = useDispatch();
  const { newReleaseChartData } = useSelector((state) => state.app);
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
        {newReleaseChartData?.items?.map((item,index)=>(
          <SongItemNewReleasePage index={index} item={item} key={item?.encodeId} />
        ))}
      </div>
    </div>
  );
};

export default NewReleasePage;
