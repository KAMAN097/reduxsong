import { combineReducers } from "redux";

const songListReducer = () => {
  return [
    {
      title: "title1",
      duration: "4:05",
    },
    {
      title: "title2",
      duration: "3:05",
    },
    {
      title: "title3",
      duration: "2:05",
    },
    {
      title: "title4",
      duration: "1:05",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songsList: songListReducer,
  selectedSong: selectedSongReducer,
});
