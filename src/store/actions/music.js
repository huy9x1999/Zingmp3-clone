import actionType from "./actionTypes";
import * as apis from "../../apis";

export const setCurSongId = (songId) => ({
  type: actionType.SET_CUR_SONG_ID,
  songId
});

export const playAlbum = (flag) => ({
  type: actionType.SET_ALBUM,
  flag
});

export const addSongs = (songs) => ({
  type: actionType.ADD_SONGS,
  songs
});

export const setCurSongData = (data) => ({
  type: actionType.SET_CUR_SONG_DATA,
  data
});

export const setCurAlbumId = (id) => ({
  type: actionType.SET_CUR_ALBUM_ID,
  id
});

// export const search = (keyword)=>async (dispatch)=>{
//   try {
//     const response = await apis.apiSearch(keyword);
//     if (response?.data.err === 0) {
//       //handle when success
//       dispatch({
//         type: actionType.SEA,
//         homeData: response.data.data.items
//       });
//     } else {
//       //handle fail
//       dispatch({
//         type: actionType.GET_HOME,
//         homeData: null
//       });
//     }
//   } catch (error) {
//     dispatch({
//       type: actionType.GET_HOME,
//       homeData: null
//     });
//   }
// }
