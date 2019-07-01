import React from "react";
import unsplash from "../../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class Pics extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    const response = await unsplash.get("/search/photos", {
      params: {
        query: term
      }
    });

    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: 10 }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found {this.state.images.length} images!
        <br />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default Pics;
