import React from "react";
import Header from "./Header";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history";
import StreamList from "./StreamList";
import StreamNew from "./StreamNew";
import StreamEdit from "./StreamEdit";
import StreamDelete from "./StreamDelete";
import StreamShow from "./StreamShow";

const Streams = () => {
  return (
    <div>
      <Header />
      <Router history={history}>
        <Switch>
          <Route path="/streams" exact component={StreamList} />
          <Route path="/streams/new" component={StreamNew} />
          <Route path="/streams/edit/:id" component={StreamEdit} />
          <Route path="/streams/delete/:id" component={StreamDelete} />
          <Route path="/streams/:id" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};
export default Streams;
