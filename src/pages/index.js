import React from "react";
import { Button, Box, TextInput } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Container>
      <h1>Home</h1>

      <Button primary label="Our mission" />

      <Button label="Join the team" />
    </Container>
    <Box
      pad={{ top: "large", bottom: "large", left: "small", right: "small" }}
      background="brand"
    >
      <Container>
        <form
          onSubmit={e => {
            e.preventDefault();
            alert("Submitted!");
          }}
        >
          <Box justify="center" align="center" direction="row" gap="small">
            <Box width="medium">
              <TextInput placeholder="l@centrifuge.io" />
            </Box>
            <Button
              type="submit"
              alignSelf="center"
              color="white"
              label="Join the list"
            />
          </Box>
        </form>
      </Container>
    </Box>
  </Layout>
);

export default IndexPage;
