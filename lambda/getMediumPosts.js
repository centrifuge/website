import fetch from "node-fetch";
import cheerio from "cheerio";

const unescapeSpecialChars = str => {
  return cheerio.load(`<!doctype html><body>${str}</body>`, "text/html").text();
};

exports.handler = async (event, context) => {
  const RSS2JSON_ENDPOINT = `https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fcentrifuge%2F`;

  var responseJson;
  try {
    const response = await fetch(RSS2JSON_ENDPOINT);
    responseJson = await response.json();
  } catch (error) {
    return {
      statusCode: 422,
      body: JSON.stringify(error)
    };
  }

  const mediumPosts = { items: [] };
  for (let item of responseJson.items) {
    try {
      item.title = unescapeSpecialChars(item.title);

      let headers = {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 11_2_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36"
      }

      let articleResponse = await fetch(item.link, headers);
      let articleHTML = await articleResponse.text();
      let $ = cheerio.load(articleHTML);

      let _description = $(`meta[property="og:description"]`).attr(`content`);
      let _image = $(`meta[property="og:image"]`).attr(`content`);

      if (_description) {
        item.description = _description;
      } else {
        item.description = "";
      }
      if (_image) {
        item.thumbnail = _image;
      }
    } finally {
      mediumPosts.items.push(item);
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(mediumPosts)
  };
};
