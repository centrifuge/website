const POSTGRES_CONFIG = {
  database: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_DATABASE,
  host: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_HOST,
  password: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PASSWORD,
  port: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_PORT,
  username: process.env.CROWDLOAN_REFERRAL_CODES_DB_POSTGRES_USER,
}

const configs = {
  altair: {
    POSTGRES_CONFIG,
    REFERRAL_TABLE_NAME: 'altair',
    URL_CONTRIBUTIONS: 'https://crowdloan-ws.centrifuge.io/contributions',
    URL_CONTRIBUTOR: 'https://crowdloan-ws.centrifuge.io/contributor',
  },
  centrifuge: {
    POSTGRES_CONFIG,
    REFERRAL_TABLE_NAME: 'centrifuge',
    URL_CROWDLOAN_SERVICE: 'https://app.gc.subsquid.io/beta/centrifuge-firesquid/v1/graphql',
    REWARDS_BUDGET: parseFloat(process.env.CCL_REWARDS_BUDGET),
    CROWDLOAN_MAX_CAP: parseFloat(process.env.CCL_CROWDLOAN_MAX_CAP),
    REWARD_HEAVYWEIGHT_PERCENT: parseFloat(process.env.CCL_REWARD_HEAVYWEIGHT_PERCENT),
    REWARD_EARLY_BIRD_PERCENT: parseFloat(process.env.CCL_REWARD_EARLY_BIRD_PERCENT),
    REWARD_REFERRAL_PERCENT: parseFloat(process.env.CCL_REWARD_REFERRAL_PERCENT),
    REWARD_LOYALTY_PERCENT: parseFloat(process.env.CCL_REWARD_LOYALTY_PERCENT),
  },
}

export function getConfig(parachain) {
  if (typeof parachain !== 'string' || !Object.keys(configs).includes(parachain)) {
    throw new Error(`The 'parachain' param needs to be one of: ${Object.keys(configs).join(', ')}`)
  }
  return configs[parachain]
}

const assertConfigIsValid = (cfg) => {
  if (
    !cfg.POSTGRES_CONFIG ||
    !cfg.POSTGRES_CONFIG.database ||
    !cfg.POSTGRES_CONFIG.host ||
    !cfg.POSTGRES_CONFIG.password ||
    !cfg.POSTGRES_CONFIG.port ||
    !cfg.POSTGRES_CONFIG.username ||
    !cfg.REFERRAL_TABLE_NAME ||
    typeof cfg.URL_CONTRIBUTIONS !== 'string' ||
    typeof cfg.URL_CONTRIBUTOR !== 'string'
  ) {
    throw new Error(`Crowdloan config invalid: check config object \n\n${JSON.stringify(cfg, null, 2)}`)
  }
}

const assertCentrifugeConfigIsValid = (cfg) => {
  if (
    !cfg.POSTGRES_CONFIG ||
    !cfg.POSTGRES_CONFIG.database ||
    !cfg.POSTGRES_CONFIG.host ||
    !cfg.POSTGRES_CONFIG.password ||
    !cfg.POSTGRES_CONFIG.port ||
    !cfg.POSTGRES_CONFIG.username ||
    !cfg.REFERRAL_TABLE_NAME ||
    typeof cfg.URL_CROWDLOAN_SERVICE !== 'string'
  ) {
    throw new Error(`Crowdloan config invalid: check config object \n\n${JSON.stringify(cfg, null, 2)}`)
  }
}

assertConfigIsValid(configs.altair)
assertCentrifugeConfigIsValid(configs.centrifuge)