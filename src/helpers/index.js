import ParseJSXToReact from "./parseJsxToReact";

const getRawHtml = block => block.childContentfulRichText.html;

const createDangerousMarkup = block => ({ __html: getRawHtml(block) });

const lastInArray = (block, index) =>
  block.length === index + 1 ? true : false;

export { lastInArray, getRawHtml, createDangerousMarkup, ParseJSXToReact };
