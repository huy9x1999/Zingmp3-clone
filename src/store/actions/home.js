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
