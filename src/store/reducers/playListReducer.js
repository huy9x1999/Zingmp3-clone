import actionType from "../actions/actionTypes";

const initState = {
  playList: null
};

const playListReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_PLAYLIST:
      return {
        ...state,
        playList: action.playList || null
      };

    default:
      return state;
  }
};

export default playListReducer;
