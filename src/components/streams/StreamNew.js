import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions/streams.js";
import StreamForm from "./StreamForm";
class StreamNew extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <div>
        <h1> Create Stream</h1>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(
  null,
  { createStream }
)(StreamNew);
