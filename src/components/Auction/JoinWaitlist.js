import React, { useState } from 'react';
import { Box, Button, Form, FormField, Text, TextInput } from 'grommet';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { validEmailReg } from './regex';

const validateEmailAddress = value => {
  if (!validEmailReg.test(value)) {
    return { status: 'error', message: 'Enter a valid email address' };
  }
};

export const JoinWaitlist = () => {
  const [emailAddress, setEmailAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const joinWaitlist = async () => {
    await addToMailchimp(
      emailAddress,
      {},
      'https://centrifuge.us17.list-manage.com/subscribe/post?u=27084e1d9e6f92398b5c7ce91&id=2c580b74e1',
    );
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <Box alignSelf="center">
      <Box
        background="black"
        height="160px"
        style={{
          borderTop: '1px solid #BBBBBB',
          borderRight: '1px solid #BBBBBB',
          borderLeft: '1px solid #BBBBBB',
          borderRadius: '8px 8px 0px 0px',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Text
            size="16px"
            textAlign="center"
            weight={500}
            style={{ paddingBottom: '8px' }}
          >
            Coming Soon
          </Text>
          <Text size="28px" textAlign="center" weight={600}>
            Polkadot
          </Text>
          <Text size="28px" textAlign="center" weight={600}>
            Parachain Auction
          </Text>
        </Box>
      </Box>
      <Box
        background="white"
        style={{
          border: '1px solid #BBBBBB',
          borderRadius: '0px 0px 8px 8px',
        }}
      >
        <Box>
          {submitted ? (
            <Box style={{ padding: '56px 0' }} direction="row" justify="center">
              <Text size="20px" weight={500}>
                Thanks for joining!
              </Text>
            </Box>
          ) : (
            <Box style={{ padding: '25px 16px 40px 16px' }}>
              <Box>
                <Text
                  size="16px"
                  textAlign="start"
                  style={{ lineHeight: '24px' }}
                >
                  Subscribe to the newsletter to stay up to date with the
                  upcoming Polkadot crowdloan!
                </Text>
              </Box>
              <Box style={{ paddingTop: '12px' }}>
                <Form
                  onSubmit={async () => {
                    await joinWaitlist();
                  }}
                  validate="submit"
                >
                  <FormField
                    label="Email"
                    name="emailAddress"
                    htmlFor="emailAddress"
                    style={{ paddingBottom: '24px' }}
                    validate={value => validateEmailAddress(value)}
                  >
                    <TextInput
                      disabled={isSubmitting}
                      id="emailAddress"
                      name="emailAddress"
                      onChange={event => {
                        setEmailAddress(event.target.value);
                      }}
                      placeholder="me@example.com"
                      value={emailAddress}
                    />
                  </FormField>
                  <Box
                    alignContent="center"
                    direction="row"
                    style={{ justifyContent: 'center' }}
                  >
                    <Button
                      color="altair"
                      disabled={isSubmitting}
                      label="Join Waitlist"
                      primary
                      type="submit"
                    />
                  </Box>
                </Form>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
