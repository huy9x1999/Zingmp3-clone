import actionType from "./actionTypes";
import * as apis from "../../apis";

export const fetchDetailPlayList = (curSongId) => async (dispatch) => {
  try {
    dispatch({
      type: actionType.CHANGE_LOAD_PLAYLIST,
      isLoad: true,
    });
    const response = await apis.apiGetDetailPlaylist(curSongId);
    if (response?.data?.err === 0) {
      dispatch({
        type: actionType.GET_PLAYLIST,
        playList: response?.data?.data,
      });
      dispatch({
        type: actionType.CHANGE_LOAD_PLAYLIST,
        isLoad: false,
      });
    }
  } catch (err) {
    dispatch({ type: actionType.GET_PLAYLIST, playList: null });
    dispatch({
      type: actionType.CHANGE_LOAD_PLAYLIST,
      isLoad: false,
    });
  }
};
