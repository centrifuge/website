import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Heading, Paragraph, Image, Anchor } from "grommet";

import Layout from "../Layout";
import SEO from "../SEO";
import * as shortcodes from "./shortcodes";

const getHeadingComponent = (level, lined = false, mb = "xsmall") => ({
  children,
  ...rest
}) => (
  <Heading lined={lined} level={level} {...rest} margin={{ bottom: mb }}>
    {children}
  </Heading>
);

const components = {
  h1: getHeadingComponent(1, true, "medium"),
  h2: getHeadingComponent(2, false, "medium"),
  h3: getHeadingComponent(3),
  h4: getHeadingComponent(4),
  h5: getHeadingComponent(5),
  h6: getHeadingComponent(6),
  p: Paragraph,
  a: ({ href, children, ...rest }) => (
    <Anchor primary href={href} label={children} />
  ),
  img: ({ src, ...rest }) => <Image src={src} {...rest} width="100%" />,
};

export default ({ children, pageContext: { frontmatter } }) => {
  const { description, title } = frontmatter;

  return (
    <Layout>
      <SEO description={description} title={title} />
      <MDXProvider components={{ ...components, ...shortcodes }}>
        {children}
      </MDXProvider>
    </Layout>
  );
};
