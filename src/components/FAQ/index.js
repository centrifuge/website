import React, { useState } from "react";
import { Box, Button, Image, Heading, Text } from "grommet";
import styled, { css } from "styled-components";

import Column, { Spacer } from "../Column";
import Grid from "../Grid";

import open_polygon from "../../images/question-open-polygon.svg";
import closed_polygon from "../../images/question-closed-polygon.svg";

const toUnderscoreCase = (text) =>
  text
    .toLowerCase()
    .split(" ")
    .join("_");

const ScrollToSection = ({ targetId, label }) => {
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
      margin={{ bottom: "xsmall" }}
      focusIndicator={false}
    >
      {label}
    </Button>
  );
};

const StickyColumn = styled(Column)`
  ${(props) =>
    !(props.screenSize === "small") &&
    css`
      position: sticky;
      top: 100px;
    `}
`;

const Question = ({ value, open, onClick }) => (
  <Box direction="row">
    <Image
      src={open ? open_polygon : closed_polygon}
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
  <Box margin={{ bottom: "large" }} {...rest}>
    <Heading level={2} margin={{ bottom: "medium" }} lined>
      {title}
    </Heading>
    {faqs.map((faq, key) => (
      <FAQItem {...faq} key={key} />
    ))}
  </Box>
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
      />
    ))}
  </Box>
);

const FAQBlock = ({ data, size }) => (
  <Grid staggered mt="large" mb="xlarge" align="flex-start">
    {/* Table of Contents */}
    <StickyColumn
      justifySelf="stretch"
      span={{ medium: 4, large: 3 }}
      screenSize={size}
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
);

export default FAQBlock;
