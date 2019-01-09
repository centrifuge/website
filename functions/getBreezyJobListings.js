import cheerio from "cheerio";
import jsonframe from "jsonframe-cheerio";
import fetch from "node-fetch";

exports.handler = async (event, context) => {
  // json-frame Schema
  const frame = {
    openings: {
      _s: "tr.position",
      _d: [
        {
          position: "h2",
          link: "h2 a @ href",
          location: ".mobile .type",
          offering: ".mobile .type"
        }
      ]
    }
  };

  // Run The Thing
  return fetch(`https://centrifuge.breezy.hr/`)
    .then(res => res.text())
    .then(html => {
      // Init Cheerio
      const $ = cheerio.load(html);

      // Init json-frame Plugin
      jsonframe($);

      // Return Cherio json-frame Schema'd JSON
      return $("tbody").scrape(frame);
    })
    .then(json =>
      json.openings.map(job => {
        return {
          ...job,
          link: `https://centrifuge.breezy.hr${job.link}/`,
          location: job.location.replace(/.*\sin\s(.*\,\s.*)/, "$1"),
          offering: job.offering.replace(/(?=\S*['-])([a-zA-Z'-]+).*/, "$1")
        };
      })
    )
    .then(json => ({
      statusCode: 200,
      body: JSON.stringify(json)
    }))
    .catch(error => ({
      statusCode: 422,
      body: JSON.stringify(error)
    }));
};
