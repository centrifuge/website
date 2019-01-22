import React, { Component } from "react";
import Lottie from "lottie-react-web";
import Observer from "@researchgate/react-intersection-observer";

class Animation extends Component {
  state = {
    isPaused: true
  };

  handleChange = e =>
    this.setState({ isPaused: e.isIntersecting ? false : true });

  render() {
    const { file } = this.props;

    return (
      <Observer onChange={this.handleChange}>
        <Lottie
          isPaused={this.state.isPaused}
          options={{ animationData: file, loop: false }}
        />
      </Observer>
    );
  }
}

export default Animation;
