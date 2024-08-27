import actionType from "./actionTypes";
import * as apis from "../../apis";
import dataMock from '../../mock-data/mock-data.json';
import dataMockReleaseChart from '../../mock-data/mock-releaseChart.json';
import dataMockTop100 from '../../mock-data/mock-top100.json';
import * as action from "../../store/actions";

export const getHome = () => async (dispatch) => {
  
  
  try {
    dispatch({
      type: actionType.CHANGE_LOAD_HOME,
      load: true,
    });
    const response = await apis.getHome();
    
    if (response?.data.err === 0) {
      //handle when success
      dispatch({
        type: actionType.GET_HOME,
        homeData: response.data.data.items,
      });
      dispatch({
        type: actionType.CHANGE_LOAD_HOME,
        load: false,
      });
    } else {
      //handle fail
      dispatch({
        type: actionType.GET_HOME,
        homeData: null,
      });
      dispatch({
        type: actionType.CHANGE_LOAD_HOME,
        load: false,
      });
    }
  } catch (error) {
    if(error.message==="Network Error"){
      dispatch({
        type: actionType.GET_HOME,
        homeData: dataMock.data.items,
      });
      dispatch(action.getErrMessage('API 503 Network Error,504 API gateway timeout , This is Mock data',true))
    }else{
      dispatch({
        type: actionType.GET_HOME,
        homeData: null,
      });
    }
    dispatch({
      type: actionType.CHANGE_LOAD_HOME,
      load: false,
    });
  }
};

export const changeIsPlaying = (isPlaying) => {
  return {
    type: actionType.CHANGE_ISPLAYING,
    isPlaying,
  };
};

export const getTop100 = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.CHANGE_LOAD_TOP100, isLoad: true });
    const response = await apis.apiGetTop100();
    if (response?.data.err === 0) {
      console.log(response.data.data);
      
      dispatch({
        type: actionType.GET_TOP_100,
        top100Data: response.data.data,
      });
      dispatch({ type: actionType.CHANGE_LOAD_TOP100, isLoad: false });
    } else {
      dispatch({
        type: actionType.GET_TOP_100,
        top100Data: null,
      });
      dispatch(actionType.CHANGE_LOAD_TOP100(false));
    }
  } catch (error) {
    if(error.message==="Network Error"){
      dispatch({
        type: actionType.GET_TOP_100,
        top100Data: dataMockTop100.data,
      });
      dispatch(action.getErrMessage('API 503 Network Error,504 API gateway timeout , This is Mock data',true))
    }else{
      dispatch({
        type: actionType.GET_TOP_100,
        top100Data: null,
      });
    }
    dispatch({ type: actionType.CHANGE_LOAD_TOP100, isLoad: false });
  }
};

export const getNewReleaseChart = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.CHANGE_LOAD_NEWRELEASE, isLoad: true });
    const response = await apis.apiNewReleaseChart();
    if (response?.data.err === 0) {
      dispatch({
        type: actionType.GET_NEWRELEASE_CHART,
        newReleaseChartData: response?.data?.data,
      });
      dispatch({ type: actionType.CHANGE_LOAD_NEWRELEASE, isLoad: false });
    } else {
      dispatch({
        type: actionType.GET_NEWRELEASE_CHART,
        newReleaseChartData: null,
      });
      dispatch({ type: actionType.CHANGE_LOAD_NEWRELEASE, isLoad: false });
    }
  } catch (error) {
    if(error.message==="Network Error"){
      dispatch({
        type: actionType.GET_NEWRELEASE_CHART,
        newReleaseChartData: dataMockReleaseChart.data,
      });
      dispatch(action.getErrMessage('API 503 Network Error,504 API gateway timeout , This is Mock data',true))
    }else{
      dispatch({
        type: actionType.GET_NEWRELEASE_CHART,
        newReleaseChartData: null,
      });
    }
    
    dispatch({ type: actionType.CHANGE_LOAD_NEWRELEASE, isLoad: false });
  }
};
