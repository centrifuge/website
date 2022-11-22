declare module '*.jpg'
declare module '*.png'
declare module '*.svg'

// custom types for 'gatsby-plugin-mailchimp'
// https://github.com/benjaminhoffman/gatsby-plugin-mailchimp/pull/71/files

type MailchimpResonse = {
  msg: string
  result: 'success' | 'error'
}

declare module 'gatsby-plugin-mailchimp' {
  export default function addToMailchimp(
    email: string,
    fields?: object,
    endpointOverride?: string
  ): Promise<MailchimpResonse>
}
