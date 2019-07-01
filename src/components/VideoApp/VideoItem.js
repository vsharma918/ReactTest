import React from "react";
import "./videoitem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={e => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnial.urls.medium}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
