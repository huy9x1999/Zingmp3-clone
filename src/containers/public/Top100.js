import React, { useEffect } from "react";
import { IconBannerTop100 } from "../../utils/customIcons";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import PlayListSlice from "../../components/PlaylistSlice";
import PlayList from "../../components/PlayList";
import Section from "../../components/Section";
const Top100 = () => {
  const dispatch = useDispatch();
  const { top100Data, isLoadTop100 } = useSelector((state) => state.app);
  useEffect(() => {
    dispatch(actions.getTop100());
  }, []);
  return (
    <div>
      <div className="mx-auto -mt-3 flex justify-center">
        <IconBannerTop100 />
      </div>
      <div className="mb-[30px]">
        {isLoadTop100 ? (
          <>
            <Section className="mt-12 px-[38px] w-full animate-pulse pb-12">
              <p className="h-[30px] mb-5 bg-gray-400 rounded dark:bg-gray-900 w-[400px]"></p>
              <div className="grid grid-cols-2 1024:grid-cols-3 1228:grid-cols-4 gap-x-4">
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
              </div>
            </Section>
            <Section className="mt-12 px-[38px] w-full animate-pulse pb-12">
              <p className="h-[30px] mb-5 bg-gray-400 rounded dark:bg-gray-900 w-[400px]"></p>
              <div className="grid grid-cols-2 1024:grid-cols-3 1228:grid-cols-4 gap-x-4">
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
              </div>
            </Section>
            <Section className="mt-12 px-[38px] w-full animate-pulse pb-12">
              <p className="h-[30px] mb-5 bg-gray-400 rounded dark:bg-gray-900 w-[400px]"></p>
              <div className="grid grid-cols-2 1024:grid-cols-3 1228:grid-cols-4 gap-x-4">
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
                <div>
                  <div className="pt-[100%] bg-gray-400 rounded dark:bg-gray-900 w-full"></div>
                  <p className="mt-4 w-full h-[20px] bg-gray-400 rounded dark:bg-gray-800"></p>
                  <p className="mt-2 h-4 w-2/3 bg-gray-400 rounded dark:bg-gray-800"></p>
                </div>
              </div>
            </Section>
          </>
        ) : (
          top100Data?.map((item) => {
            if (item?.viewType === "slider") {
              return (
                item.items?.length > 0 && (
                  <PlayListSlice key={item.encodeId} data={item} />
                )
              );
            }
            return (
              item.items?.length > 0 && (
                <PlayList key={item.encodeId} data={item} />
              )
            );
          })
        )}
      </div>
    </div>
  );
};

export default Top100;
