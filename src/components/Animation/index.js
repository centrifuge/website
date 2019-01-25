import React, { Component } from "react";
import Lottie from "lottie-react-web";
import styled from "styled-components";
import Observer from "@researchgate/react-intersection-observer";

const AnimationWrapper = styled.div`
  /* Fix issue w/ z-index for Dropdown */
  svg {
    transform: unset !important;
  }
`;

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
        <AnimationWrapper>
          <Lottie
            height={384}
            isPaused={this.state.isPaused}
            options={{ animationData: file, loop: false }}
          />
        </AnimationWrapper>
      </Observer>
    );
  }
}

export default Animation;
