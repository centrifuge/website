import ParseJSXToReact from "./parseJsxToReact";

const getRawHtml = block => block.childContentfulRichText.html;

const createDangerousMarkup = block => ({ __html: getRawHtml(block) });

export { getRawHtml, createDangerousMarkup, ParseJSXToReact };
