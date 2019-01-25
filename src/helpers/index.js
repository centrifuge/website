import ParseJSXToReact from "./parseJsxToReact";
import RichTextRenderer from "./richTextRenderer";

const getRawHtml = block => block.childContentfulRichText.html;

const createDangerousMarkup = block => ({ __html: getRawHtml(block) });

const lastInArray = (block, index) =>
  block.length === index + 1 ? true : false;

export {
  lastInArray,
  getRawHtml,
  createDangerousMarkup,
  ParseJSXToReact,
  RichTextRenderer
};
