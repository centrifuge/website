import React from "react";

const Footer = () => (
  <footer>
    <ul style={{ display: "flex", lsitStyle: "none" }}>
      <li>
        <address>
          San-Francisco
          <br />
          548 Market Street #67433
          <br />
          San Francisco, CA 94104
        </address>
      </li>
      <li>
        <address>
          Berlin
          <br />
          Full Node, Skalitzer Strasse 85-86
          <br />
          10997 Berlin
        </address>
      </li>
      <li>
        <ul>
          <li>Twitter</li>
          <li>Medium</li>
          <li>GitHub</li>
          <li>Slack</li>
        </ul>
      </li>
      <li>
        <ul>
          <li>hello@centrifuge.io</li>
          <li>Imprint</li>
          <li>Data Privacy Policy</li>
          <li>Documentation</li>
        </ul>
      </li>
    </ul>
    <p>Centrifuge Inc. © Copyright 2018</p>
  </footer>
);

export default Footer;
