import React from "react";
import { Link } from "gatsby";

import wordmark from "../../images/centrifuge-wordmark.svg";

const Navigation = () => (
  <nav style={{ display: "flex" }}>
    <div style={{ flex: 1 }}>
      <Link to="/">
        <img src={wordmark} />
      </Link>
    </div>
    <Link to="/technology">Technology</Link>
    <Link to="/ecosystem">Ecosystem</Link>
    <Link to="/news">News</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Navigation;
