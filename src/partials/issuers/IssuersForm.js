import React, { useContext, useEffect, useMemo, useState } from "react";
import { Section } from "../../components/MDXLayout/shortcodes";
import CTAForm from "../../components/CTAForm";
import {
  Box,
  Button,
  Form,
  FormField,
  ResponsiveContext,
  Text,
  TextArea,
  TextInput
} from "grommet";
import Grid from "../../components/Grid";
import Column from "../../components/Column";
import { isEmail, isFQDN, isMobilePhone } from "validator";

const IssuersForm = () => {
  const size = useContext(ResponsiveContext);

  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    website: "",
    aim: ""
  });

  const [errors, setErrors] = useState({
    name: {
      isValid: false,
      message: ""
    },
    email: {
      isValid: false,
      message: ""
    },
    phone: {
      isValid: false,
      message: ""
    },
    organization: {
      isValid: false,
      message: ""
    },
    website: {
      isValid: false,
      message: ""
    },
    aim: {
      isValid: false,
      message: ""
    }
  });

  const isValid = useMemo(
    () => {
      return (
        errors.name.isValid &&
        errors.email.isValid &&
        errors.phone.isValid &&
        errors.organization.isValid &&
        errors.website.isValid &&
        errors.aim.isValid
      );
    },
    [errors]
  );

  useEffect(
    () => {
      let errors = {};

      if (value.email === "") errors.email = { isValid: false, message: "" };
      else if (!isEmail(value.email))
        errors.email = { isValid: false, message: "E-mail is incorrect" };
      else errors.email = { isValid: true, message: "" };

      if (value.name === "") errors.name = { isValid: false, message: "" };
      else errors.name = { isValid: true, message: "" };

      if (value.phone === "") errors.phone = { isValid: true, message: "" };
      else if (!isMobilePhone(value.phone, "any", { strict: false }))
        errors.phone = { isValid: false, message: "Phone number is incorrect" };
      else errors.phone = { isValid: true, message: "" };

      if (value.organization === "")
        errors.organization = { isValid: false, message: "" };
      else errors.organization = { isValid: true, message: "" };

      if (value.website === "")
        errors.website = { isValid: false, message: "" };
      else if (!isFQDN(value.website))
        errors.website = {
          isValid: false,
          message: "Website domain is invalid"
        };
      else errors.website = { isValid: true, message: "" };

      if (value.aim === "") errors.aim = { isValid: false, message: "" };
      else errors.aim = { isValid: true, message: "" };

      setErrors(errors);
    },
    [value]
  );

  console.log(errors);

  return (
    <Section gap="large">
      <Box align="center" gap="small">
        <Text size="xlarge" weight={500} textAlign="center">
          Access Capital
        </Text>
        <Text size="large" weight={500} color="dark-3" textAlign="center">
          Complete this form to access capital and speak to a member of the
          Centrifuge team:
        </Text>
      </Box>
      <CTAForm>
        {sendEmail => (
          <Form
            value={value}
            onChange={nextValue => setValue(nextValue)}
            onSubmit={async ({ value }) => {
              const status = await sendEmail("Access Capital", value);
              if (!status) console.log("Mail sending failed");
              else console.log("Mail sent successfully");
            }}
          >
            <Grid mt="small" mb="medium" justify="stretch" gap="90">
              <Column span={{ large: 2, medium: 2 }} />
              <Column
                span={{ large: 8, medium: 8, small: 12 }}
                gap="medium"
                alignSelf="stretch"
                margin={{ bottom: "medium" }}
              >
                <FormField
                  name="name"
                  htmlfor="name-text-input"
                  label="What is your name?"
                  error={!errors.name.isValid ? errors.name.message : false}
                >
                  <TextInput name="name" id="name-text-input" />
                </FormField>
                <FormField
                  name="email"
                  htmlfor="email-text-input"
                  label="What is your email?"
                  error={!errors.email.isValid ? errors.email.message : false}
                >
                  <TextInput name="email" id="email-text-input" />
                </FormField>
                <FormField
                  name="phone"
                  htmlfor="phone-text-input"
                  label="What is your mobile phone number? (optional)"
                  error={!errors?.phone.isValid ? errors.phone.message : false}
                >
                  <TextInput name="phone" id="phone-text-input" />
                </FormField>
                <FormField
                  name="organization"
                  htmlfor="organization-text-input"
                  label="What is your organization?"
                  error={
                    !errors.organization.isValid
                      ? errors.organization.message
                      : false
                  }
                >
                  <TextInput name="organization" id="organization-text-input" />
                </FormField>
                <FormField
                  name="website"
                  htmlfor="website-text-input"
                  label="What is your organization website?"
                  error={
                    !errors.website.isValid ? errors.website.message : false
                  }
                >
                  <TextInput name="website" id="website-text-input" />
                </FormField>
                <FormField
                  name="aim"
                  htmlfor="aim-textarea"
                  label="What are you hoping to achieve through Centrifuge?"
                  error={!errors.aim.isValid ? errors.aim.message : false}
                >
                  <TextArea
                    name="aim"
                    placeholder="We are trying to achieve..."
                    style={{
                      height: "150px"
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
              <Button
                primary
                disabled={!isValid}
                type="submit"
                label="Submit"
              />
            </Box>
          </Form>
        )}
      </CTAForm>
    </Section>
  );
};

export default IssuersForm;
