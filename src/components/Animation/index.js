import React, { Component } from "react";
import PropTypes from "react";
import Lottie from "lottie-react-web";
import styled from "styled-components";
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
          isPaused={this.state.isPaused}
          options={{ animationData: file, loop: loop }}
        />
      </Observer>
    );
  }
}

Animation.defaultProps = {
  loop: true
};

export default Animation;
