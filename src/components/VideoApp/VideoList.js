import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videosRender = videos.map(video => (
    <VideoItem key={video.id} onVideoSelect={onVideoSelect} />
  ));
  return <div> {videosRender}</div>;
};

export default VideoList;
