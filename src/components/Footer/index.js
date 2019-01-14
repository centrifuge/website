import React from "react";

import { List, Item } from "../List";

const Footer = () => (
  <footer>
    <List style={{ display: "flex" }}>
      <Item>
        <address>
          San-Francisco
          <br />
          548 Market Street #67433
          <br />
          San Francisco, CA 94104
        </address>
      </Item>
      <Item>
        <address>
          Berlin
          <br />
          FListl Node, Skalitzer Strasse 85-86
          <br />
          10997 Berlin
        </address>
      </Item>
      <Item>
        <List>
          <Item>Twitter</Item>
          <Item>Medium</Item>
          <Item>GitHub</Item>
          <Item>Slack</Item>
        </List>
      </Item>
      <Item>
        <List>
          <Item>
            <a
              target="_blank"
              href={`mailto:hello@centrifuge.io?subject=Hello`}
            >
              hello@centrifuge.io
            </a>
          </Item>
          <Item>Imprint</Item>
          <Item>Data Privacy PoItemcy</Item>
          <Item>Documentation</Item>
        </List>
      </Item>
    </List>
    <p>Centrifuge Inc. © Copyright 2018</p>
  </footer>
);

export default Footer;
