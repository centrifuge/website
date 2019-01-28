import RichTextRenderer from "./richTextRenderer";

const lastInArray = (block, index) =>
  block.length === index + 1 ? true : false;

export {
  lastInArray,
  RichTextRenderer
};
