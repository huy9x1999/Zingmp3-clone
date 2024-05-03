import actionType from "./actionTypes";
import * as apis from "../../apis";

export const fetchDetailPlayList = (curSongId) => async (dispatch) => {
  try {
    const response = await apis.apiGetDetailPlaylist(curSongId);
    if (response?.data?.err === 0) {
      dispatch({
        type: actionType.GET_PLAYLIST,
        playList: response?.data?.data
      });
    }
  } catch (err) {
    dispatch({ type: actionType.GET_PLAYLIST, playList: null });
  }
};