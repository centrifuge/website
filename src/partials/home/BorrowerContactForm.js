import React, { useState, useEffect } from "react";
import {
  Form,
  FormField,
  Box,
  Heading,
  TextInput,
  TextArea,
  Button,
  Text,
  Anchor,
  ResponsiveContext,
} from "grommet";
import { isEmail } from "validator";

import Grid from "../../components/Grid";
import Column from "../../components/Column";
import CTAForm from "../../components/CTAForm";

const BorrowerContactForm = ({ toggleModal }) => {
  const [value, setValue] = useState({
    email: "",
    company: "",
    work: "",
    time: "",
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
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box round="xsmall" pad="large">
          <Heading margin={{ bottom: "xsmall" }}>Contact us</Heading>
          <Text textAlign="start" size="large" margin={{ bottom: "large" }}>
            or send us a message at{" "}
            <Anchor href="mailto:tinlake.centrifuge.io">
              tinlake.centrifuge.io
            </Anchor>
            .
          </Text>
          <CTAForm>
            {(sendEmail) => (
              <Form
                value={value}
                onChange={(nextValue) => setValue(nextValue)}
                onSubmit={async ({ value }) => {
                  toggleModal();
                  const status = await sendEmail("Borrower", value);
                  if (!status) console.log("Mail sending failed");
                  else console.log("Mail sent successfully");
                }}
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
                    alignSelf="stretch"
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
                <Box
                  direction="row"
                  justify="center"
                  gap="medium"
                  margin={size === "small" ? { bottom: "large" } : {}}
                >
                  <Button onClick={toggleModal} label="Go Back" />
                  <Button
                    primary
                    disabled={!emailError.isValid}
                    type="submit"
                    label="Send"
                  />
                </Box>
              </Form>
            )}
          </CTAForm>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default BorrowerContactForm;
