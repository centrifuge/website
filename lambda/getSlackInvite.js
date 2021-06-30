import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
require('encoding');

exports.handler = async (event, context) => {
  const payload = JSON.parse(event.body);
  const email = encodeURIComponent(payload.email.trim());

  const SLACK_INVITE_ENDPOINT =
    "https://centrifuge-io.slack.com/api/users.admin.invite";

  const toSlack = `email=${email}&token=${
    process.env.SLACK_TOKEN
  }&set_active=true`;

  return fetch(`${SLACK_INVITE_ENDPOINT}?${toSlack}`)
    .then(res => res.json())
    .then(json => ({
      statusCode: 200,
      body: JSON.stringify(json)
    }))
    .catch(error => ({
      statusCode: 422,
      body: JSON.stringify(error)
    }));
};
