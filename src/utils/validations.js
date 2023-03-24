const { INVALID_CREDENTIALS_RESPONSE } = require("./errors/invalid");

const credentials = async function (username, password) {
  if (!username || !password) {
    throw INVALID_CREDENTIALS_RESPONSE;
  }

  return;
};

const values = async function (check, message) {
  if (!check) {
    throw message;
  }

  return;
};

module.exports = { credentials, values };
