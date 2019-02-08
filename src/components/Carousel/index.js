import React from "react";
import { ResponsiveContext } from "grommet";
import { default as NukaCarousel } from "nuka-carousel";

const Carousel = ({ children, ...rest }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <NukaCarousel
        renderCenterRightControls={null}
        renderCenterLeftControls={null}
        slidesToShow={size === "small" ? 1 : 2}
        {...rest}
      >
        {children}
      </NukaCarousel>
    )}
  </ResponsiveContext.Consumer>
);

export default Carousel;
