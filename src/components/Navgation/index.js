import React from "react";
import { Link } from "gatsby";

const Navigation = () => (
  <nav style={{ display: "flex" }}>
    <div style={{ flex: 1 }}>
      <Link to="/">
        <code>centrifuge logo</code>
      </Link>
    </div>
    <Link to="/technology">Technology</Link>
    <Link to="/ecosystem">Ecosystem</Link>
    <Link to="/news">News</Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Navigation;
