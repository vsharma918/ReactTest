import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../../actions/songs";
import LangaugeContext from "../../LanguageStore";

class SongList extends Component {
  static contextType = LangaugeContext;
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="button ui primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    console.log(this.context);
    return (
      <div className="ui divided list">
        {this.renderList()}
        <button
          className="button ui primary"
          onClick={() => this.context.onLanguageChange("english")}
        >
          Change Language
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
