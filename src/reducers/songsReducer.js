export const songsReducer = () => {
  return [
    {
      title: "Drake Nice For What",
      singer: "Sam Smith & Normani",
      duration: "4:50"
    },
    {
      title: "Cardi B, Bad Bunny & J Balvin I Like It",
      singer: "Sam Smith & Normani",
      duration: "5:10"
    },
    {
      title: "Dancing With A Stranger",
      singer: "Sam Smith & Normani",
      duration: "3:50"
    },
    {
      title: "Break Up With Your Girlfriend, I'm Bored",
      singer: "Ariana Grande",
      duration: "4:20"
    }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};
