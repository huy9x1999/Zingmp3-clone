import React, { useEffect } from "react";
import { IconBannerTop100 } from "../../utils/customIcons";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import PlayListSlice from "../../components/PlaylistSlice";
import PlayList from "../../components/PlayList";
const Top100 = () => {
  const dispatch = useDispatch();
  const { top100Data } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(actions.getTop100());
  }, []);
  return (
    <div>
      <div className="mx-auto -mt-3 flex justify-center">
        <IconBannerTop100 />
      </div>
      <div className="mb-[30px]">
        {top100Data?.map((item) => {
          if (item?.viewType === "slider") {
            return (
              item.items?.length > 0 && (
                <PlayListSlice key={item.encodeId} data={item} />
              )
            );
          }
          return (
            item.items?.length > 0 && <PlayList key={item.encodeId} data={item} />
          );
        })}
      </div>
    </div>
  );
};

export default Top100;
