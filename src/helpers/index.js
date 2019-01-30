import RichTextRenderer from "./richTextRenderer";

const lastInArray = (block, index) =>
  block.length === index + 1 ? true : false;

const MEDIUM_CDN = "https://cdn-images-1.medium.com/max/400";

const MEDIUM_URL = "https://medium.com/centrifuge/";

export { lastInArray, MEDIUM_CDN, MEDIUM_URL, RichTextRenderer };
