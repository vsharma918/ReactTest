import React from "react";

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div> Loading ...</div>;
  }
  //const videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tudEENTfqyQ"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
          title="video player"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.title}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
