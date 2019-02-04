import React from "react";

// height of the nav component
const nav = 64;

const DeepLink = ({ id, children }) => (
  <span id={id} style={{ marginTop: -(100 + nav), paddingTop: 100 + nav }}>
    {children}
  </span>
);

export default DeepLink;
