import cheerio from "cheerio";
import jsonframe from "jsonframe-cheerio";
import fetch from "node-fetch";

exports.handler = async (event, context) => {
  // json-frame Schema
  const frame = {
    openings: {
      _s: "li.position",
      _d: [
        {
          position: "a h2",
          link: "a @ href",
          location: "a ul li.location span",
          // offering: "a ul li.type span.polygot",
        },
      ],
    },
  };

  const getOfferingText = (type) => {
    switch (type) {
      case "%LABEL_POSITION_TYPE_PART_TIME%":
        return "Part-Time";
      case "%LABEL_POSITION_TYPE_FULL_TIME%":
        return "Full-Time";
      default:
        return null;
    }
  };

  // Run The Thing
  return fetch(`https://centrifuge.breezy.hr/`)
    .then((res) => res.text())
    .then((html) => {
      // Init Cheerio
      const $ = cheerio.load(html);

      // Init json-frame Plugin
      jsonframe($);

      // Return Cherio json-frame Schema'd JSON
      return $("ul.positions").scrape(frame);
    })
    .then((json) =>
      json.openings.map((job) => ({
        ...job,
        link: `https://centrifuge.breezy.hr${job.link}/`,
        location: job.location.replace(/.*\sin\s(.*\,\s.*)/, "$1"),
        // offering: getOfferingText(job.offering),
      }))
    )
    .then((json) => ({
      statusCode: 200,
      body: JSON.stringify(json),
    }))
    .catch((error) => ({
      statusCode: 422,
      body: JSON.stringify(error),
    }));
};
