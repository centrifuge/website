declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "gatsby-plugin-mailchimp" {
  const addToMailchimp: (
    emailAddress: string,
    fields?: Record<string, unknown>,
    endpointOverride?: string
  ) => void;
  export default addToMailchimp;
}
