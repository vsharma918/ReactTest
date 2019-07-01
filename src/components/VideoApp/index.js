import React from "react";
import youtube from "../../api/youtube";
import VideoSearchBar from "./VideoSearchBar";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class VideoApp extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onVideoSearch("buildings");
  }

  onVideoSearch = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div className="ui container">
        Video App
        <VideoSearchBar onSubmit={this.onVideoSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={video => this.setState({ selectedVideo: video })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VideoApp;
