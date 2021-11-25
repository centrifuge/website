require("dotenv").config({
  path: require("path").resolve(
    process.cwd(),
    `./lambda/.env.${process.env.NODE_ENV}`
  ),
});

const POSTGRES_CONFIG = {
  database: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_DATABASE,
  host: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_HOST,
  password: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PASSWORD,
  port: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PORT,
  username: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_USER,
};

console.log({
  database: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_DATABASE,
  host: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_HOST,
  password: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PASSWORD,
  port: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PORT,
  username: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_USER,
});

const configs = {
  altair: {
    POSTGRES_CONFIG,
    REFERRAL_TABLE_NAME: "altair",
    REFERRAL_CODES_BUCKET: "altair_referral_codes",
    URL_CONTRIBUTIONS: "https://crowdloan-ws.centrifuge.io/contributions",
  },
  centrifuge: {
    POSTGRES_CONFIG,
    REFERRAL_TABLE_NAME: "centrifuge",
    REFERRAL_CODES_BUCKET: "centrifuge_referral_codes",

    // TODO: replace with new contributions web service
    URL_CONTRIBUTIONS: "https://crowdloan-ws.centrifuge.io/contributions",
  },
};

module.exports.getConfig = (parachain) => {
  if (
    typeof parachain !== "string" ||
    !Object.keys(configs).includes(parachain)
  ) {
    throw new Error(
      `The 'parachain' param needs to be one of: ${Object.keys(configs).join(
        ", "
      )}`
    );
  }
  return configs[parachain];
};

const assertConfigIsValid = (cfg) => {
  if (
    !cfg.POSTGRES_CONFIG ||
    !cfg.POSTGRES_CONFIG.database ||
    !cfg.POSTGRES_CONFIG.host ||
    !cfg.POSTGRES_CONFIG.password ||
    !cfg.POSTGRES_CONFIG.port ||
    !cfg.POSTGRES_CONFIG.username ||
    !cfg.REFERRAL_TABLE_NAME ||
    !cfg.URL_CONTRIBUTIONS
  ) {
    throw new Error(
      `Crowdloan config invalid: check config object \n\n${JSON.stringify(
        cfg,
        null,
        2
      )}`
    );
  }
};

assertConfigIsValid(configs.altair);
assertConfigIsValid(configs.centrifuge);
