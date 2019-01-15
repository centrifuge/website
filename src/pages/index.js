import React from "react";
import { Button, Box, Heading, Text, Image } from "grommet";
import Lottie from "lottie-react-web";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import EmailSubscription from "../components/EmailSubscription";
import Column from "../components/Column";
import Grid from "../components/Grid";
import Paragraph from "../components/Paragraph";

import block1Image from "../images/block1-image.svg";
import block2Image from "../images/block2-image.svg";
import block3Image from "../images/block3-image.svg";
import block4Image from "../images/block4-image.svg";

import testAnimation from "../lottie/test-animation.json";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Container>
      <Box margin={{ bottom: "xlarge" }}>
        <div>
          <Heading size="large">Header Size Large</Heading>
          <Heading>Header Size</Heading>
          <Heading size="small">Header Size Small</Heading>

          <Heading level="2" size="large">
            Subheader Size Large
          </Heading>
          <Heading level="2">Subheader</Heading>

          <Heading level="2" size="large" noLine>
            Subheader Size Large, No Line
          </Heading>
          <Heading level="2" noLine>
            Subheader, No Line
          </Heading>
        </div>
      </Box>
      <Grid>
        <Column span={4}>
          <Heading size="large">
            The Operating System for the Financial Supply Chain
          </Heading>
          <Paragraph>
            Centrifuge is an open, decentralized operating system to connect the
            global financial supply chain. It allows any business, no matter how
            big, to transact on a global network while maintaining ownership of
            their data, including their validated company details, their
            reputation, business relationships, and subsequent transactions.
          </Paragraph>
        </Column>
        <Column span={8}>
          <Lottie options={{ animationData: testAnimation }} />
        </Column>
      </Grid>

      <Grid>
        <Column span={8}>
          <Image src={block2Image} />
        </Column>
        <Column span={4}>
          <Heading>Ut labore adipisicing adipisicing deserunt.</Heading>
          <Paragraph>
            Fugiat aute magna nostrud incididunt labore ullamco excepteur elit
            enim pariatur officia voluptate nisi nisi. Elit sit commodo ipsum
            laborum elit commodo id enim adipisicing ex quis. Labore fugiat
            Lorem reprehenderit culpa dolor veniam. Est id duis et voluptate
            aute laborum consequat nostrud do pariatur proident non incididunt.
            Fugiat ex cupidatat ea consequat occaecat proident dolore irure quis
            sunt pariatur laborum. Ea Lorem occaecat nulla incididunt excepteur
            aliqua adipisicing consectetur fugiat mollit deserunt non. Nostrud
            in consectetur non minim fugiat tempor nisi occaecat non Lorem velit
            dolore.
          </Paragraph>
        </Column>
      </Grid>

      <Grid>
        <Column span={4}>
          <Heading>Ut labore adipisicing adipisicing deserunt.</Heading>
          <Paragraph>
            Fugiat aute magna nostrud incididunt labore ullamco excepteur elit
            enim pariatur officia voluptate nisi nisi. Elit sit commodo ipsum
            laborum elit commodo id enim adipisicing ex quis. Labore fugiat
            Lorem reprehenderit culpa dolor veniam. Est id duis et voluptate
            aute laborum consequat nostrud do pariatur proident non incididunt.
            Fugiat ex cupidatat ea consequat occaecat proident dolore irure quis
            sunt pariatur laborum. Ea Lorem occaecat nulla incididunt excepteur
            aliqua adipisicing consectetur fugiat mollit deserunt non. Nostrud
            in consectetur non minim fugiat tempor nisi occaecat non Lorem velit
            dolore.
          </Paragraph>
        </Column>
        <Column span={8}>
          <Image src={block3Image} />
        </Column>
      </Grid>

      <Grid>
        <Column span={8}>
          <Image src={block4Image} />
        </Column>
        <Column span={4}>
          <Heading>Ut labore adipisicing adipisicing deserunt.</Heading>
          <Paragraph>
            Fugiat aute magna nostrud incididunt labore ullamco excepteur elit
            enim pariatur officia voluptate nisi nisi. Elit sit commodo ipsum
            laborum elit commodo id enim adipisicing ex quis. Labore fugiat
            Lorem reprehenderit culpa dolor veniam. Est id duis et voluptate
            aute laborum consequat nostrud do pariatur proident non incididunt.
            Fugiat ex cupidatat ea consequat occaecat proident dolore irure quis
            sunt pariatur laborum. Ea Lorem occaecat nulla incididunt excepteur
            aliqua adipisicing consectetur fugiat mollit deserunt non. Nostrud
            in consectetur non minim fugiat tempor nisi occaecat non Lorem velit
            dolore.
          </Paragraph>
        </Column>
      </Grid>
    </Container>
    <EmailSubscription />
  </Layout>
);

export default IndexPage;
