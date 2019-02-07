import RichTextRenderer from "./richTextRenderer";

const lastInArray = (block, index) =>
  block.length === index + 1 ? true : false;

const MEDIUM_CDN = "https://cdn-images-1.medium.com/max/720";

const MEDIUM_URL = "https://medium.com/centrifuge/";

const YOUTUBE_URL = "https://www.youtube.com/channel/UCfNkoq7YLrr8MeSJ3a6jVcA";

const responsiveGrid = {
  FourTwo: size => {
    switch (size) {
      case "large":
      case "medium":
        return ["1fr", "1fr", "1fr", "1fr"];
      case "small":
      default:
        return ["1fr", "1fr"];
    }
  },
  ThreeTwoOne: size => {
    switch (size) {
      case "large":
        return ["1fr", "1fr", "1fr"];
      case "medium":
        return ["1fr", "1fr"];
      case "small":
      default:
        return ["1fr"];
    }
  },
  TwoOne: size => {
    switch (size) {
      case "large":
      case "medium":
        return ["1fr", "1fr"];
      case "small":
      default:
        return ["1fr"];
    }
  }
};

export {
  lastInArray,
  MEDIUM_CDN,
  MEDIUM_URL,
  YOUTUBE_URL,
  RichTextRenderer,
  responsiveGrid
};
