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
import CTAForm from "../../components/CTAForm";

const BorderlessSelectWrapper = styled.div`
  button {
    border: none !important;
    border-radius: 0 !important;
    width: 100%;
  }
`;

const InvestorContactForm = ({ toggleModal }) => {
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
      <Box round="xsmall" pad="large">
        <Heading margin={{ bottom: "large" }}>Contact us</Heading>
        <CTAForm>
          {(sendEmail) => (
            <Form
              value={value}
              onChange={(nextValue) => setValue(nextValue)}
              onSubmit={async ({ value }) => {
                toggleModal();
                const status = await sendEmail("Asset Originator", value);
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
                    name="status"
                    htmlfor="status-select"
                    label="Investor Status"
                  >
                    <BorderlessSelectWrapper>
                      <Select
                        name="status"
                        id="status-select"
                        plain
                        size="small"
                        placeholder="Please select"
                        options={[
                          "US Accredited",
                          "US Non-Accredited",
                          "Non-US",
                        ]}
                      />
                    </BorderlessSelectWrapper>
                  </FormField>
                </Column>
                <Column
                  span={{ large: 6, medium: 6, small: 12 }}
                  gap="medium"
                  alignSelf="stretch"
                  margin={{ bottom: "medium" }}
                >
                  <FormField
                    name="size"
                    htmlfor="size-select"
                    label="Estimate Size of Investment, USD"
                  >
                    <BorderlessSelectWrapper>
                      <Select
                        name="size"
                        id="size-select"
                        plain
                        size="small"
                        placeholder="Please select"
                        options={[
                          "$0–10.000",
                          "$10,000–50,000",
                          "$50,000–100,000",
                          ">$100,000",
                        ]}
                      />
                    </BorderlessSelectWrapper>
                  </FormField>
                  <FormField
                    name="interest"
                    htmlfor="interest-textarea"
                    label="Describe your interest in investing in Tinlake Pools"
                  >
                    <TextArea
                      name="interest"
                      placeholder="I am interested in investing because"
                      style={{
                        height: "150px",
                      }}
                    />
                  </FormField>
                </Column>
              </Grid>
              <Box direction="row" justify="center" gap="medium">
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
    </>
  );
};

export default InvestorContactForm;
