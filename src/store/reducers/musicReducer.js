import actionType from "../actions/actionTypes";

const initState = {
  curSongId: null,
  listAlbum: [],
  atAlbum: false
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionType.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.songId || null
      };
    case actionType.ADD_SONGS:{
      console.log(action);
      return {
        ...state,
        listAlbum: action.songs || []
      };
    }
      
    case actionType.SET_ALBUM:
      return {
        ...state,
        atAlbum: action.flag
      };

    default:
      return state;
  }
};

export default musicReducer;
