import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import Season from "./components/Season";
import Pics from "./components/pics";
import VideoApp from "./components/VideoApp";
import BlogApp from "./components/blogs";
import Songs from "./components/songs";
import App from "./components/App";
import Streams from "./components/streams";
import LeftMenu from "./components/LeftMenu";
import Hooks from "./components/hooks";
import history from "./history";
import { LanguageStore } from "./LanguageStore";

const Routes = ({ store }) => (
  <Provider store={store}>
    <div className="ui placeholder segment">
      <Router history={history}>
        <LanguageStore value="english">
          <div className="ui two column very relaxed stackable grid">
            <div className="column">
              <LeftMenu />
            </div>
            <div className="middle aligned column">
              <Route path="/" exact component={App} />
              <Route path="/season" component={Season} />
              <Route path="/songs" component={Songs} />
              <Route path="/videos" component={VideoApp} />
              <Route path="/pics" component={Pics} />
              <Route path="/blogs" component={BlogApp} />
              <Route path="/streams" component={Streams} />
              <Route path="/hooks" component={Hooks} />
            </div>
          </div>
        </LanguageStore>
      </Router>

      <div className="ui vertical divider" />
    </div>
  </Provider>
);

Routes.propTypes = {
  store: PropTypes.object.isRequired
};

export default Routes;
