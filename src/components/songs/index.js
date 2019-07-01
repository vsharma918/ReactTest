import React from "react";
//import { selectSong } from "./actions";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import { LanguageStore } from "../../LanguageStore";

class Songs extends React.Component {
  onLanguageChange = () => {};
  render() {
    return (
      <LanguageStore>
        <div className="ui container grid">
          <div className="ui row">
            <div className="column eight wide">
              <SongList />
            </div>
            <div className="column eight wide">
              <SongDetail />
            </div>
          </div>
        </div>
      </LanguageStore>
    );
  }
}
export default Songs;
