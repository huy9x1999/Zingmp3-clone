import {
  IconLibrary,
  IconDiscovery,
  IconZingChart,
  IconRadio,
  IconNotes,
  IconHubs,
  IconOutlineStar,
  IconTimeHistory,
  IconHeartBlue,
  IconPlayList,
  IconAlbum,
  IconUploadCloud
} from "./customIcons";

const sidebarFirstMenu = [
  {
    path: "mymusic",
    text: "Thư Viện",
    icon: <IconLibrary size={24} />
  },
  {
    path: "",
    text: "Khám Phá",
    end: true,
    icon: <IconDiscovery size={24} />
  },
  {
    path: "zing-chart",
    text: "#zingchart",
    icon: <IconZingChart size={24} />
  },
  {
    path: "radio",
    text: "Radio",
    icon: <IconRadio size={24} />
  }
];

const sidebarSecondaryMenu = [
  {
    path: "moi-phat-hanh",
    text: "BXH Nhạc Mới",
    icon: <IconNotes size={24} />
  },
  {
    path: "hub",
    text: "Chủ Đề & Thể Loại",
    icon: <IconHubs size={24} />
  },
  {
    path: "top100",
    text: "Top 100",
    icon: <IconOutlineStar size={24} />
  }
];

const sidebarThirdMenu = [
  {
    path: "mymusic/history",
    text: "Nghe gần đây",
    icon: <IconTimeHistory size={24} />
  },
  {
    path: "mymusic/song/favorite",
    text: "Bài hát yêu thích",
    icon: <IconHeartBlue size={24} />
  },
  {
    path: "mymusic/libraly/playlist",
    text: "Playlist",
    icon: <IconPlayList size={24} />
  },
  {
    path: "mymusic/album",
    text: "Album",
    icon: <IconAlbum size={24} />
  },
  {
    path: "mymusic/song/upload",
    text: "Đã tải lên",
    icon: <IconUploadCloud size={24} />
  }
];

const clientCreateSidebarMenu = [
  {
    path: "playlist/sad-us-uk",
    text: "sad us uk"
  },
  {
    path: "playlist/di-ngu",
    text: "đi ngủ"
  },
  {
    path: "playlist/indie",
    text: "indie"
  },
  {
    path: "playlist/nhac-viet-buon",
    text: "nhạc việt buồn"
  },
  {
    path: "playlist/cac-bai-hat-tieng-anh",
    text: "các bài hát tiếng anh"
  }
];

export {
  sidebarFirstMenu,
  sidebarSecondaryMenu,
  sidebarThirdMenu,
  clientCreateSidebarMenu
};
