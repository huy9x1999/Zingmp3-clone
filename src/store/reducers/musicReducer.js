import actionType from "../actions/actionTypes";

const initState = {
  curSongId: null,
  curSongData: null,
  curAlbumId: null,
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
    case actionType.ADD_SONGS:
      return {
        ...state,
        listAlbum: action.songs || []
      };

    case actionType.SET_ALBUM:
      return {
        ...state,
        atAlbum: action.flag
      };

    case actionType.SET_CUR_SONG_DATA:
      return {
        ...state,
        curSongData: action.data || null
      };
    case actionType.SET_CUR_ALBUM_ID:
      return {
        ...state,
        curAlbumId: action.id || null
      };
    default:
      return state;
  }
};

export default musicReducer;
