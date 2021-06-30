import fetch from "node-fetch";
require('encoding');

exports.handler = async (event, context) => {
  try {
    const response = await fetch(`https://api.lever.co/v0/postings/centrifuge`);
    let positions = await response.json();
    positions = positions
      .map(position => ({
        id: position.id,
        position: position.text,
        link: position.hostedUrl
      }))
      .filter(
        // Don't see your role?
        position => position.id !== "c0f7a908-8d9e-4f3c-9b15-a4f81e033484"
      );

    return {
      statusCode: 200,
      body: JSON.stringify(positions)
    };
  } catch (e) {
    return {
      statusCode: 422,
      body: JSON.stringify(e)
    };
  }
};
