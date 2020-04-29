import React, { useState } from "react";
import {
  Box,
  Button,
  Image,
  Heading,
  Text,
  ResponsiveContext,
  Paragraph,
  Anchor,
} from "grommet";
import styled, { css } from "styled-components";

import Column, { Spacer } from "../Column";
import Grid from "../Grid";

import chevron_right from "../../images/chevron-right.svg";
import chevron_down from "../../images/chevron-down.svg";
import chevron_up from "../../images/chevron-up.svg";
import tinlake_logo_small from "../../images/tinlake/tinlake-logo-small.svg";
import faq_graphic from "../../images/faq-graphic.svg";

const toUnderscoreCase = (text) =>
  text
    .toLowerCase()
    .split(" ")
    .join("_");

const StickyColumn = styled(Column)`
  ${(props) =>
    !(props.screenSize === "small") &&
    css`
      position: sticky;
      top: 100px;
    `}
`;

const FAQPageHeader = () => (
  <ResponsiveContext.Consumer>
    {(size) => {
      const faqGraphic = <Image src={faq_graphic} />;
      const tinlakeLogo = (
        <Image
          src={tinlake_logo_small}
          margin={{ top: "medium", bottom: "small" }}
          alignSelf="start"
        />
      );
      const faqParagraph = (
        <Paragraph>
          Find a list of frequently asked questions on how Tinlake works below.
          Is your question not answered, feel free to reach out to us at{" "}
          <Anchor
            href="mailto:tinlake@centrifuge.io"
            primary
            label="tinlake@centrifuge.io"
          />
          .
        </Paragraph>
      );
      const faqHeadingText = "Frequently Asked Questions";

      return size === "small" ? (
        <Box margin={{ top: "xlarge", bottom: "xlarge" }} gap="medium">
          <Heading level={2} margin={{ bottom: "medium" }} lined>
            <Box direction="row" gap="small" justify="between">
              <Box justify="center">
                {tinlakeLogo}
                {faqHeadingText}
              </Box>
              <Box width="15%">{faqGraphic}</Box>
            </Box>
          </Heading>
          {faqParagraph}
        </Box>
      ) : (
        <Grid staggered mt="xlarge" mb="xlarge">
          <Column span={{ medium: 4, large: 4 }} justifySelf="center">
            {faqGraphic}
          </Column>
          <Column justifySelf="stretch" span={{ medium: 8, large: 8 }}>
            {tinlakeLogo}
            <Heading level={2} margin={{ bottom: "medium" }} lined>
              {faqHeadingText}
            </Heading>
            {faqParagraph}
          </Column>
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

const ScrollToSection = ({ targetId, label, ...rest }) => {
  const goToSection = () => {
    var el = document.getElementById(targetId);
    el.scrollIntoView();
    window.scrollBy(0, -100);
  };

  return (
    <Button
      alignSelf="start"
      size="small"
      onClick={goToSection}
      // margin={{ bottom: "xsmall" }}
      focusIndicator={false}
      {...rest}
    >
      {label}
    </Button>
  );
};

const Question = ({ value, open, onClick }) => (
  <Box direction="row">
    <Image
      src={open ? chevron_down : chevron_right}
      width="12px"
      margin={{ right: "small" }}
    />
    <Text
      size="large"
      onClick={onClick}
      style={{ cursor: "pointer" }}
      dangerouslySetInnerHTML={{ __html: value.replace(/<\/?p>/g, "") }}
    />
  </Box>
);

const Answer = ({ value, open }) => (
  <>
    {open ? (
      <Text
        margin={{ top: "xsmall", left: "medium" }}
        dangerouslySetInnerHTML={{ __html: value.replace(/<\/?p>/g, "") }}
      />
    ) : null}
  </>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box margin={{ bottom: "small" }}>
      <Question value={q} open={open} onClick={toggleOpen} />
      <Answer value={a} open={open} />
    </Box>
  );
};

const FAQGroup = ({ title, faqs, ...rest }) => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Box margin={{ bottom: "large" }} {...rest}>
        <Heading level={2} margin={{ bottom: "medium" }} lined>
          <Box direction="row" justify="between">
            <Box>{title}</Box>
            {size === "small" ? (
              <Box direction="row" gap="xsmall">
                <Image src={chevron_up} />
                <ScrollToSection
                  targetId="table_of_contents"
                  label="TOP"
                  alignSelf="center"
                />
              </Box>
            ) : null}
          </Box>
        </Heading>
        {faqs.map((faq, key) => (
          <FAQItem {...faq} key={key} />
        ))}
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

const TOC = ({ data }) => (
  <Box margin={{ bottom: "large" }}>
    <Heading level={2} margin={{ bottom: "medium" }} lined>
      Table of Contents
    </Heading>
    {data.map((edge, key) => (
      <ScrollToSection
        targetId={toUnderscoreCase(edge.node.title)}
        label={edge.node.title}
        key={key}
        margin={{ bottom: "xsmall" }}
      />
    ))}
  </Box>
);

const FAQBlock = ({ data }) => (
  <ResponsiveContext.Consumer>
    {(size) => (
      <Grid staggered mt="large" mb="xlarge" align="flex-start">
        {/* Table of Contents */}
        <StickyColumn
          justifySelf="stretch"
          span={{ medium: 4, large: 3 }}
          screenSize={size}
          id="table_of_contents"
        >
          <TOC data={data} />
        </StickyColumn>
        <Spacer />
        {/* FAQ Groups */}
        <Column justifySelf="stretch" span={{ medium: 8, large: 8 }}>
          {data.map((edge, key) => (
            <FAQGroup
              {...edge.node}
              key={key}
              id={toUnderscoreCase(edge.node.title)}
            />
          ))}
        </Column>
      </Grid>
    )}
  </ResponsiveContext.Consumer>
);

export { FAQPageHeader, FAQBlock };
