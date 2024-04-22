import actionType from "../actions/actionTypes";

const initState = {
  curSongId: null,
  isPlaying: false
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.songId || null
      };
    case actionType.CHANGE_ISPLAING:
      return {
        ...state,
        isPlaying: action.flag || null
      };
    default:
      return state;
  }
};

export default musicReducer;
