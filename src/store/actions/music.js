import actionType from "./actionTypes";

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

