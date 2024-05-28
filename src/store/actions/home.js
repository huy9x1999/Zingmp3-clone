import actionType from "./actionTypes";
import * as apis from "../../apis";

export const getHome = () => async (dispatch) => {
  try {
    const response = await apis.getHome();
    if (response?.data.err === 0) {
      //handle when success
      dispatch({
        type: actionType.GET_HOME,
        homeData: response.data.data.items
      });
    } else {
      //handle fail
      dispatch({
        type: actionType.GET_HOME,
        homeData: null
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_HOME,
      homeData: null
    });
  }
};

export const changeIsPlaying = (isPlaying) => {
  return {
    type: actionType.CHANGE_ISPLAING,
    isPlaying
  };
};

export const getTop100 = () => async (dispatch)=>{
  try {
    const response = await apis.apiGetTop100();
    if (response?.data.err === 0) {
      dispatch({
        type: actionType.GET_TOP_100,
        top100Data: response.data.data
      });
    } else {
      dispatch({
        type: actionType.GET_TOP_100,
        top100Data: null
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_TOP_100,
      top100Data: null
    });
  }
}

export const getNewReleaseChart = () => async (dispatch)=>{
  try {
    const response = await apis.apiNewReleaseChart();
    if (response?.data.err === 0) {
      dispatch({
        type: actionType.GET_NEWRELEASE_CHART,
        newReleaseChartData: response?.data?.data
      });
    } else {
      dispatch({
        type: actionType.GET_NEWRELEASE_CHART,
        newReleaseChartData: null
      });
    }
  } catch (error) {
    dispatch({
      type: actionType.GET_NEWRELEASE_CHART,
      newReleaseChartData: null
    });
  }
}
