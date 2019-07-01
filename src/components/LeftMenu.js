import React from "react";
import { Link } from "react-router-dom";
const renderMenuItem = (itemName, linkTo) => {
  return (
    <div className="item">
      <div className="content">
        <Link to={linkTo} className="header">
          {itemName}
        </Link>
      </div>
    </div>
  );
};
const LeftMenu = () => {
  return (
    <div className="ui middle aligned divided list">
      {renderMenuItem("Home", "/")}
      {renderMenuItem("Season App", "/season")}
      {renderMenuItem("Songs App", "/songs")}
      {renderMenuItem("Video App", "/videos")}
      {renderMenuItem("Pics App", "/pics")}
      {renderMenuItem("Blog App", "/blogs")}
      {renderMenuItem("Streams App", "/streams")}
      {renderMenuItem("Hooks Simple", "/hooks")}
    </div>
  );
};
export default LeftMenu;
