import cheerio from "cheerio";
import jsonframe from "jsonframe-cheerio";
import fetch from "node-fetch";
import AbortController from "abort-controller";
import EventEmitter from "events";

class AbortSignal extends EventEmitter {
  constructor(signal) {
    super();
    this.signal = signal;
    this.aborted = false;
    signal.addEventListener("abort", (...e) => this._onAbort(...e));
    this.onabort = () => 0;
  }

  static get name() {
    return "AbortSignal";
  }

  addEventListener(...args) {
    this.on(...args);
  }

  removeEventListener(...args) {
    this.off(...args);
  }

  _onAbort(...e) {
    // noinspection JSConstantReassignment
    this.aborted = true;
    this.onabort();
    this.emit("abort", ...e);
  }

  get [Symbol.toStringTag]() {
    return "AbortSignal";
  }
}

exports.handler = async (event, context) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 9500);

  // json-frame Schema
  const frame = {
    openings: {
      _s: "li.position",
      _d: [
        {
          position: "a h2",
          link: "a @ href",
          location: "a ul li.location span",
        },
      ],
    },
  };

  // Run The Thing
  return fetch(`https://centrifuge.breezy.hr/`, {
    signal: new AbortSignal(controller.signal),
  })
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
      }))
    )
    .then((json) => ({
      statusCode: 200,
      body: JSON.stringify(json),
    }))
    .catch((error) => ({
      statusCode: 422,
      body: JSON.stringify(error),
    }))
    .finally(() => {
      clearTimeout(timeout);
    });
};
