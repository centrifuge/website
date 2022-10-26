import { Box, Stack, Shelf, Text, TextInput, Button, InlineFeedback, InlineFeedbackProps } from '@centrifuge/fabric'
import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

const INPUT_NAME = 'email'
const MAIL_CHIMP_FIELDS = { 'group[11932][2]': '2' }

const icons = {
  success: 'ok',
  error: 'warning',
} as Record<string, InlineFeedbackProps['status']>

export function NewsletterSubscribe() {
  const [valid, setValid] = React.useState(true)
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [message, setMessage] = React.useState<MailchimpResonse>()

  function onSubmit(event: React.FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const email = formData.get(INPUT_NAME) as string

    setValid(isValidEmail(email))

    if (valid) {
      setIsSubmitting(true)

      addToMailchimp(email, MAIL_CHIMP_FIELDS)
        .then((data) => {
          setMessage(data)
        })
        .then(() => {
          setIsSubmitting(false)
        })
    } else {
    }
  }

  function isValidEmail(email: string) {
    return !!String(email)
      .toLowerCase()
      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
  }

  return (
    <Stack
      as="form"
      method="POST"
      id="newsletter-subscribe"
      onSubmit={onSubmit}
      noValidate
      backgroundColor="backgroundPrimary"
      p={2}
      borderRadius="input"
      alignItems="start"
      gap={1}
    >
      <Box position="relative" width="100%">
        <TextInput label="Email" placeholder="example@domain.com" type="email" required name={INPUT_NAME} />
        {message && (
          <Shelf
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            alignItems="center"
            backgroundColor="backgroundPrimary"
          >
            {/* @ts-expect-error */}
            <InlineFeedback status={icons[message.result]}>{message.msg}</InlineFeedback>
          </Shelf>
        )}
      </Box>

      {!valid && (
        <Box px={2}>
          <Text as="strong" variant="body3" color="statusWarning">
            Enter a valid email address.
          </Text>
        </Box>
      )}
      <Button variant="secondary" type="submit" small disabled={isSubmitting}>
        Subscribe
      </Button>
    </Stack>
  )
}
