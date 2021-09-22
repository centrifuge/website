import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();

const {
  SENDGRID_API_KEY,
  SENDGRID_TO_EMAIL,
  SENDGRID_FROM_EMAIL
} = process.env;

exports.handler = async event => {
  if (event.httpMethod === "GET") {
    return {
      statusCode: 405,
      body: "Method not allowed"
    };
  }

  const payload = JSON.parse(event.body);

  // Return a fake success response if the honeypot field was filled
  if (payload.body.hemail) {
    return {
      statusCode: 200,
      body: 'Sent'
    };
  }
  // remove the empty honeypot field
  delete payload.body.hemail;

  const body = Object.keys(payload.body)
    .map(k => {
      return `${k}: ${
        typeof payload.body[k] === "object"
          ? JSON.stringify(payload.body[k])
          : payload.body[k]
      }`;
    })
    .join("<br/>");

  const msg = {
    to: SENDGRID_TO_EMAIL,
    from: SENDGRID_FROM_EMAIL,
    subject: payload.subject ? payload.subject : "New Contact Us Request",
    html: body
  };

  try {
    sgMail.setApiKey(SENDGRID_API_KEY);
    await sgMail.send(msg);
    return {
      statusCode: 200,
      body: "Success"
    };
  } catch (e) {
    return {
      statusCode: e.code,
      body: e.message
    };
  }
};
