import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = { lat: null, errorMessage: "" };


  //when component mount get latitude or error message
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  //render the content conditionally
  renderContent() {
    //render the error message if cannot get lat -  based on componentDidMount changes to state
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    //if no error message and is lat, return a seasondisplay that takes the lat
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    //return a spinner with the message if no errorMessage or state.lat
    return <Spinner message="Please accept location request" />;
  }

  //Call the results of this.rendercontent within JSX
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

//Render the app
ReactDOM.render(<App />, document.querySelector("#root"));
