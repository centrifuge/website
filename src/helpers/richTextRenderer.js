import React from "react";
import { documentToReactTree } from "rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { Heading, Button, Box, Paragraph } from "grommet";

import { Slack, Github } from "grommet-icons";
import { Gitcoin } from "../components/Icons/";

const DebugData = ({ data }) => (
  <pre>
    <code>{JSON.stringify(data, null, 2)}</code>
  </pre>
);

const renderButton = (button, index) => {
  const style = button.buttonStyle ? button.buttonStyle["en-US"] : undefined;
  const link = button.link["en-US"];
  const text = button.text["en-US"];

  switch (style) {
    case "Outline":
      return (
        <Button
          key={index}
          margin={{ top: "medium", bottom: "small" }}
          href={link}
          label={text}
        />
      );

    case "Plain":
      return (
        <Button
          key={index}
          margin={{ top: "medium", bottom: "small" }}
          plain
          href={link}
          label={text}
        />
      );

    case "Gitcoin":
      return (
        <Button
          key={index}
          margin={{ top: "medium", bottom: "small" }}
          plain
          icon={<Gitcoin />}
          href={link}
          label={text}
          target="_blank"
          rel="noopener noreferrer"
        />
      );

    case "Github":
      return (
        <Button
          key={index}
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
          key={index}
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
          key={index}
          margin={{ top: "medium", bottom: "small" }}
          primary
          href={link}
          label={text}
        />
      );
  }
};

const renderButtonGroup = (buttons, justify) => (
  <Box direction="row-responsive" gap="medium" justify={justify} align="center">
    {buttons.map((button, index) => {
      return renderButton(button.fields, `Button_${index}`);
    })}
  </Box>
);

const embedRenderer = (id, node) => {
  switch (id) {
    case "componentButtonGroup":
      const buttonGroupData = node.data.target.fields.buttons["en-US"];

      const buttonGroupJustify = node.data.target.fields.justifyContent
        ? node.data.target.fields.justifyContent["en-US"]
        : "start";

      return renderButtonGroup(buttonGroupData, buttonGroupJustify);

    case "componentButton":
      const buttonData = node.data.target.fields;

      return renderButton(buttonData);

    default:
      return <DebugData data={node.data.target} />;
  }
};

const options = noHyphen => ({
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) =>
      // eslint-disable-next-line
      children != "" ? (
        <Paragraph noHyphen={noHyphen ? noHyphen : false}>{children}</Paragraph>
      ) : null,

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
});

const RichTextRenderer = ({ block, noHyphen }) => (
  <div>{documentToReactTree(block.contentAST, options(noHyphen))}</div>
);

export default RichTextRenderer;
