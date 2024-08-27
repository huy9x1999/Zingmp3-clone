import actionType from "./actionTypes";
import * as apis from "../../apis";
import dataMock from '../../mock-data/mock-playlist.json';
import * as action from "../../store/actions";

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
    if(err.message==="Network Error"){
      dispatch({
        type: actionType.GET_PLAYLIST,
        playList: dataMock.data,
      });
      
      dispatch(action.getErrMessage('API 503 Network Error,504 API gateway timeout, This is Mock data',true))
    }else{
      dispatch({ type: actionType.GET_PLAYLIST, playList: null });
    }
    dispatch({
      type: actionType.CHANGE_LOAD_PLAYLIST,
      isLoad: false,
    });
  }
};
