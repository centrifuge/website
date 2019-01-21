import React, { Component } from "react";
import Lottie from "lottie-react-web";
// @NOTE: need to remove this when Safari catches up
import "intersection-observer";
import Observer from "@researchgate/react-intersection-observer";

class Animation extends Component {
  state = {
    isPaused: true
  };

  handleChange = e =>
    this.setState({ isPaused: e.isIntersecting ? false : true });

  render() {
    const { file, loop } = this.props;

    return (
      <Observer onChange={this.handleChange}>
        <Lottie
          height={384}
          isPaused={this.state.isPaused}
          options={{ animationData: file, loop: loop }}
        />
      </Observer>
    );
  }
}

export default Animation;
