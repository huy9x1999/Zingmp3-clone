import axios from "../axios";

export const apiGetSong = (songId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/song",
        method: "get",
        params: {
          id: songId
        }
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetDetailSong = (songId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/infosong",
        method: "get",
        params: {
          id: songId
        }
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetDetailPlaylist = (playlistId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/detailplaylist",
        method: "get",
        params: {
          id: playlistId
        }
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetTop100 = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: "/top100",
        method: "get"
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

  export const apiNewReleaseChart = () =>
    new Promise(async (resolve, reject) => {
      try {
        const response = await axios({
          url: "/newReleaseChart",
          method: "get"
        });
  
        resolve(response);
      } catch (error) {
        reject(error);
      }
    });