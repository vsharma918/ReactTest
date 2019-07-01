import axios from "axios";

const YOUTUBE_KEY = "AIzaSyClg0rF9coU_P797gEzJx1KU2-hoYfS-ck";
const YOUTUBE_URL = "https://www.googleapis.com/youtube/v3";

export default axios.create({
  baseURL: YOUTUBE_URL,
  params: {
    part: "snippet",
    maxResults: 5,
    key: YOUTUBE_KEY
  }
});
