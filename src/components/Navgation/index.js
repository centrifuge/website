import React from "react";
import { Link } from "gatsby";

import wordmark from "../../images/centrifuge-wordmark.svg";

// import "./styles.css";

const Navigation = () => (
  <nav role="navigation">
    <ul style={{ display: "flex"}}>
      <li style={{ flex: 1 }}>
        <Link to="/">
          <img alt="Centrifuge Wordmark" src={wordmark} />
        </Link>
      </li>
      <li>
        <Link to="/technology">Technology</Link>
        <ul className="dropdown">
          <li>
            <Link to="/technology/components">Components</Link>
          </li>
          <li>
            <Link to="/technology/contribute">Contribute</Link>
          </li>
          <li>
            <Link to="/technology/protocol">Protocol</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/ecosystem">Ecosystem</Link>
        <ul className="dropdown">
          <li>
            <Link to="/ecosystem/#sub-1">Sub-1</Link>
          </li>
          <li>
            <Link to="/ecosystem/#sub-2">Sub-2</Link>
          </li>
          <li>
            <Link to="/ecosystem/#sub-3">Sub-3</Link>
          </li>
          <li>
            <Link to="/ecosystem/#sub-4">Sub-4</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="/news">News</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
