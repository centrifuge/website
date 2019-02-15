import React from "react";
import { TextInput, Button, Paragraph } from "grommet";
import styled from "styled-components";

const FormWrapper = styled.div`
  display: grid;
  grid-gap: 32px;

  @media only screen and (min-width: 424px) {
    grid-template-columns: 1fr minmax(160px, max-content);
  }
`;

class SlackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      response: "",
      submitted: false,
      submitDisabled: false
    };
  }

  returnMessage = response => {
    if (response.ok) return "An invitation has been sent to your inbox!";

    const notification = {
      already_invited: "It seems that you've been invited already...",
      already_in_team: "It seems that you've been in this team already...",
      user_disabled: "Your account has been disabled",
      invalid_email: "Your email adress is invalid"
    };

    return notification[response.error];
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitDisabled: true });

    fetch(`/.netlify/functions/getSlackInvite`, {
      method: "POST",
      mode: "same-origin",
      body: JSON.stringify({
        email: this.state.email
      })
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);

        this.setState({
          response: this.returnMessage(json),
          submitDisabled: false,
          submitted: true
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = e => this.setState({ email: e.target.value });

  render() {
    if (!this.state.submitted) {
      return (
        <form onSubmit={this.handleSubmit}>
          <FormWrapper>
            <TextInput
              required
              dark
              newsletter
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="your@email.com"
            />
            <Button
              fill
              primary
              label="Join"
              type="submit"
              disabled={this.state.submitDisabled}
              alignSelf="center"
            />
          </FormWrapper>
        </form>
      );
    }

    return <Paragraph>{this.state.response}</Paragraph>;
  }
}

export default SlackForm;
