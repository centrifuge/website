import React from "react";
import { Box, TextInput, Button } from "grommet";
import addToMailchimp from "gatsby-plugin-mailchimp";
import styled from "styled-components";

import Container from "../Container";

const FormWrapper = styled.div`
  display: grid;
  grid-gap: 24px;

  @media only screen and (min-width: 424px) {
    grid-template-columns: 1fr max-content;
  }
`;

class SubscriptionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      response: {},
      submitted: false,
      submitDisabled: false
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitDisabled: true });

    addToMailchimp(this.state.email)
      .then(data => this.setState({ response: data }))
      .then(() => this.setState({ submitDisabled: false, submitted: true }));
  };

  handleChange = e => this.setState({ email: e.target.value });

  render() {
    if (!this.state.submitted) {
      return (
        <form onSubmit={this.handleSubmit}>
          <FormWrapper>
            <TextInput
              required
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="your@email.com"
            />
            <Button
              white
              type="submit"
              disabled={this.state.submitDisabled}
              alignSelf="center"
              label="Join the list"
            />
          </FormWrapper>
        </form>
      );
    }

    return (
      <p
        style={{ textAlign: "center" }}
        dangerouslySetInnerHTML={{ __html: this.state.response.msg }}
      />
    );
  }
}

const EmailWrapper = styled(Box)`
  /* Mailchimp Response Link Style */
  a {
    color: var(--c-white);

    &:active {
      opacity: 0.9;
    }
  }
`;

const EmailSubscription = () => (
  <EmailWrapper pad={{ top: "large", bottom: "large" }} background="brand">
    <Container>
      <Box align="center">
        <Box width="large">
          <SubscriptionForm />
        </Box>
      </Box>
    </Container>
  </EmailWrapper>
);

export default EmailSubscription;
