import React from "react";
import { Box, TextInput, Button, Text, ResponsiveContext } from "grommet";
import addToMailchimp from "gatsby-plugin-mailchimp";
import styled from "styled-components";

import Container from "../Container";

// todo remove stale code

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

    addToMailchimp(this.state.email, {
      "group[11932][2]": "2"
    })
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
              dark={this.props.light}
              required
              newsletter
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Your E-mail"
              style={
                this.props.light
                  ? {
                      fontSize: 16
                    }
                  : {
                      fontSize: 16,
                      color: "white"
                    }
              }
            />
            <Button
              white={!this.props.light}
              primary={this.props.light}
              type="submit"
              disabled={this.state.submitDisabled}
              alignSelf="center"
              style={{
                fontSize: 16,
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 52,
                paddingRight: 52
              }}
              label="Subscribe"
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

SubscriptionForm.defaultProps = {
  light: false
};

const EmailWrapper = styled(Box)`
  /* Mailchimp Response Link Style */
  a {
    color: #fff;

    &:active {
      opacity: 0.9;
    }
  }
`;

const EmailSubscription = () => (
  <EmailWrapper tag="section" pad={{ vertical: "large" }} background="brand">
    <Container>
      <Box align="center">
        <Box width="large">
          <SubscriptionForm />
        </Box>
      </Box>
    </Container>
  </EmailWrapper>
);

const SubstackIFrame = () => (
  <iframe
    src="https://centrifuge.substack.com/embed"
    width="300"
    height="120"
    style={{
      border: "1px",
      solid: "white",
      background: "brand"
    }}
    frameBorder="0"
    scrolling="no"
  />
);

const SubstackEmailSubscription = () => {
  const description = (
    <Box>
      <Text size="large">Stay up to date</Text>
      <Text size="xlarge" weight={500}>
        Centrifuge Newsletter
      </Text>
    </Box>
  );

  return (
    <EmailWrapper tag="section" background="brand" pad={{ vertical: "small" }}>
      <ResponsiveContext.Consumer>
        {size =>
          ["large", "medium"].includes(size) ? (
            <Container>
              <Box direction="row" justify="between" align="center">
                {description}
                <SubstackIFrame />
              </Box>
            </Container>
          ) : (
            <Box align="center" pad={{ top: "medium" }}>
              {description}
              <SubstackIFrame />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </EmailWrapper>
  );
};

export { SubscriptionForm };
export default EmailSubscription;
