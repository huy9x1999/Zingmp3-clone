import actionType from "../actions/actionTypes";

const initState = {
  homeData: null,
  top100Data: null,
  newReleaseChartData: null,
  isLoadNewRelease:false,
  isLoadTop100:false,
  isPlaying: false,
  isLoadHome:false
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.CHANGE_LOAD_HOME:
      return {
        ...state,
        isLoadHome: action.load
      };
    case actionType.GET_HOME:
      return {
        ...state,
        homeData: action.homeData
      };
    case actionType.GET_TOP_100:
      return {
        ...state,
        top100Data: action.top100Data
      };
    case actionType.GET_NEWRELEASE_CHART:
      return {
        ...state,
        newReleaseChartData: action.newReleaseChartData
      };
    case actionType.CHANGE_ISPLAYING: {
      return {
        ...state,
        isPlaying: action.isPlaying
      };
    }
    case actionType.CHANGE_LOAD_NEWRELEASE: {
      return {
        ...state,
        isLoadNewRelease: action.isLoad
      };
    }
    case actionType.CHANGE_LOAD_TOP100: {
      return {
        ...state,
        isLoadTop100: action.isLoad
      };
    }

    default:
      return state;
  }
};

export default appReducer;
