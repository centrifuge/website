export const getRawHtml = block => block.childContentfulRichText.html;

export const createMarkup = block => ({ __html: getRawHtml(block) });
