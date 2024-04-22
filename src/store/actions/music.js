import actionType from "./actionTypes";

export const setCurSongId = (songId) => ({
  type: actionType.SET_CUR_SONG_ID,
  songId
});

export const changeIsPlaying = (flag) => ({
  type: actionType.CHANGE_ISPLAING,
  flag
});