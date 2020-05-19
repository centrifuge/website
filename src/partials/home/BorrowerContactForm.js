import React, { useState, useEffect } from "react";
import {
  Form,
  FormField,
  Box,
  Heading,
  TextInput,
  Select,
  TextArea,
  Button,
} from "grommet";
import styled from "styled-components";
import { isEmail } from "validator";

import Grid from "../../components/Grid";
import Column from "../../components/Column";

const BorderlessSelectWrapper = styled.div`
  button {
    border: none !important;
    border-radius: 0 !important;
    width: 100%;
    text-decoration: none;
  }
`;

const BorrowerContact = () => {
  const [value, setValue] = useState({
    email: "",
    company: "",
    status: "",
    size: "",
    interest: "",
  });
  const [emailError, setEmailError] = useState({
    isValid: false,
    message: "",
  });

  useEffect(
    () => {
      if (value.email === "") {
        setEmailError({
          isValid: false,
          message: "",
        });
      } else if (!isEmail(value.email)) {
        setEmailError({
          isValid: false,
          message: "E-mail is incorrect",
        });
      } else {
        setEmailError({
          isValid: true,
          message: "",
        });
      }
    },
    [value]
  );

  return (
    <>
      <Box
        elevation="small"
        round="xsmall"
        pad="medium"
      >
        <Heading margin={{ bottom: "large" }}>Contact us</Heading>
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onSubmit={({ value }) => console.log(value)}
        >
          <Grid mt="small" mb="medium" justify="stretch" gap="90">
            <Column
              span={{ large: 6, medium: 6, small: 12 }}
              gap="medium"
              alignSelf="stretch"
              margin={{ bottom: "medium" }}
            >
              <FormField
                name="email"
                htmlfor="email-text-input"
                label="Your E-mail*"
                error={!emailError.isValid ? emailError.message : false}
              >
                <TextInput name="email" id="email-text-input" />
              </FormField>
              <FormField
                name="company"
                htmlfor="company-text-input"
                label="Company Name"
              >
                <TextInput name="company" id="company-text-input" />
              </FormField>
              <FormField
                name="work"
                htmlfor="work-text-input"
                label="What do you do?"
              >
                <TextInput name="work" id="work-text-input" />
              </FormField>
            </Column>
            <Column
              span={{ large: 6, medium: 6, small: 12 }}
              gap="medium"
              alignSelf="start"
              margin={{ bottom: "medium" }}
            >
              <FormField
                name="time"
                htmlfor="time-text-input"
                label="How long have you been in operation?"
              >
                <TextInput name="time" id="time-text-input" />
              </FormField>
              <FormField
                name="interest"
                htmlfor="interest-textarea"
                label="Why DeFi?"
              >
                <TextArea
                  name="interest"
                  placeholder="DeFi because"
                  style={{
                    height: "150px",
                  }}
                />
              </FormField>
            </Column>
          </Grid>
          <Box align="center">
            <Button
              primary
              disabled={!emailError.isValid}
              type="submit"
              label="Send"
            />
          </Box>
        </Form>
      </Box>
    </>
  );
};

export default BorrowerContact;
