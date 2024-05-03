import actionType from "../actions/actionTypes";

const initState = {
  homeData: [],
  isPlaying: false
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_HOME:
      return {
        ...state,
        homeData: action.homeData
      };
    case actionType.CHANGE_ISPLAING:{
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
