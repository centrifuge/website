import React from "react";
import { Box, TextInput, Button } from "grommet";
import addToMailchimp from "gatsby-plugin-mailchimp";

import Container from "../Container";

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
      .then(() => this.setState({ submitDisabled: false }));
  };

  handleChange = e => this.setState({ email: e.target.value });

  render() {
    return (
      <>
        <form disabled={this.state.submitted} onSubmit={this.handleSubmit}>
          <Box justify="center" align="center" direction="row" gap="medium">
            <Box width="medium">
              <TextInput
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="l@centrifuge.io"
              />
            </Box>
            <Button
              type="submit"
              disabled={this.state.submitDisabled}
              alignSelf="center"
              label="Join the list"
            />
          </Box>
        </form>
        <div>{JSON.stringify(this.state.response, null, 2)}</div>
      </>
    );
  }
}

const EmailSubscription = () => (
  <Box pad={{ top: "large", bottom: "large" }} background="brand">
    <Container>
      <SubscriptionForm />
    </Container>
  </Box>
);

export default EmailSubscription;
