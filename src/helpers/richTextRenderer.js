import React from "react";
import { documentToReactTree } from "rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Heading, Button, Box, Paragraph } from "grommet";
import { Slack, Github } from "grommet-icons";

const DebugData = ({ data }) => (
  <pre>
    <code>{JSON.stringify(data, null, 2)}</code>
  </pre>
);

const renderButton = button => {
  const style = button.buttonStyle ? button.buttonStyle["en-US"] : undefined;
  const link = button.link["en-US"];
  const text = button.text["en-US"];

  switch (style) {
    case "Outline":
      return (
        <Button
          margin={{ top: "medium", bottom: "small" }}
          href={link}
          label={text}
        />
      );

    case "Plain":
      return (
        <Button
          margin={{ top: "medium", bottom: "small" }}
          plain
          href={link}
          label={text}
        />
      );

    case "Github":
      return (
        <Button
          margin={{ top: "medium", bottom: "small" }}
          plain
          icon={<Github />}
          href={link}
          label={text}
          target="_blank"
          rel="noopener noreferrer"
        />
      );

    case "Slack":
      return (
        <Button
          margin={{ top: "medium", bottom: "small" }}
          plain
          icon={<Slack />}
          href={link}
          label={text}
          target="_blank"
          rel="noopener noreferrer"
        />
      );

    default:
      return (
        <Button
          margin={{ top: "medium", bottom: "small" }}
          primary
          href={link}
          label={text}
        />
      );
  }
};

const renderButtonGroup = (buttons, justify) => (
  <Box direction="row-responsive" justify={justify} align="center" gap="medium">
    {buttons.map(button => {
      return renderButton(button.fields);
    })}
  </Box>
);

const embedRenderer = (id, node) => {
  switch (id) {
    case "componentButtonGroup":
      const buttonGroupData = node.data.target.fields.buttons["en-US"];

      const buttonGroupJustify = node.data.target.fields.justifyContent
        ? node.data.target.fields.justifyContent["en-US"]
        : "initial";

      return renderButtonGroup(buttonGroupData, buttonGroupJustify);

    case "componentButton":
      const buttonData = node.data.target.fields;

      return renderButton(buttonData);

    default:
      return <DebugData data={node.data.target} />;
  }
};

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) =>
      // eslint-disable-next-line
      children != "" ? <Paragraph>{children}</Paragraph> : null,

    [BLOCKS.HEADING_1]: (node, children) => (
      <Heading level="1" lined>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <Heading level="2" lined>
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Heading level="3">{children}</Heading>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Heading level="4">{children}</Heading>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Heading level="5">{children}</Heading>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Heading level="6">{children}</Heading>
    ),

    [BLOCKS.EMBEDDED_ENTRY]: (node, children) =>
      embedRenderer(node.data.target.sys.contentType.sys.id, node),

    [INLINES.HYPERLINK]: (node, children) => (
      <a className="a" href={node.data.uri}>
        {children}
      </a>
    )
  }
};

const RichTextRenderer = ({ block }) => (
  <div>{documentToReactTree(block.contentAST, options)}</div>
);

export default RichTextRenderer;
