import actionType from "../actions/actionTypes";

const initState = {
  homeData: null,
  top100Data: null,
  newReleaseChartData: null,
  isPlaying: false
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
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
    case actionType.CHANGE_ISPLAING: {
      return {
        ...state,
        isPlaying: action.isPlaying
      };
    }

    default:
      return state;
  }
};

export default appReducer;
