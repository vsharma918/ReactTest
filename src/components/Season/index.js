import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class Season extends React.Component {
  constructor(props) {
    super(props);
    console.log("my component constructor called!");
    this.state = { lat: null, errorMessage: "" };
  }
  componentDidMount() {
    console.log("My component called component did mount!");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  componentDidUpdate() {
    console.log("my component has been updated!");
  }
  renderContent() {
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error : {this.state.errorMessage}</div>;
    }
    return <Spinner message="Please accept current location." />;
  }
  render() {
    console.log("my conponent is rendering");
    return <div className="red border">{this.renderContent()}</div>;
  }
}
export default Season;
