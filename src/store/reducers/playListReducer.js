import actionType from "../actions/actionTypes";

const initState = {
  playList: null,
  isLoad:false
};

const playListReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_PLAYLIST:
      return {
        ...state,
        playList: action.playList || null
      };
    case actionType.CHANGE_LOAD_PLAYLIST:
      return {
        ...state,
        isLoad:action.isLoad
      }  

    default:
      return state;
  }
};

export default playListReducer;
