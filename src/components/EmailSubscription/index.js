import React from "react";
import { Box, TextInput, Button } from "grommet";

import Container from "../Container";

export const SubscriptionForm = () => (
  <form
    onSubmit={e => {
      e.preventDefault();
      alert("Submitted!");
    }}
  >
    <Box justify="center" align="center" direction="row" gap="medium">
      <Box width="medium">
        <TextInput placeholder="l@centrifuge.io" />
      </Box>
      <Button type="submit" alignSelf="center" label="Join the list" />
    </Box>
  </form>
);

const EmailSubscription = () => (
  <Box pad={{ top: "large", bottom: "large" }} background="brand">
    <Container>
      <SubscriptionForm />
    </Container>
  </Box>
);

export default EmailSubscription;
