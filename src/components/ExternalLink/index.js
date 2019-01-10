import React from "react";

const ExternalLink = props => (
  <a {...props} rel="noopener norefferer" target="_blank">
    {props.children}
  </a>
);

export default ExternalLink;
