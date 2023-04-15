const { INVALID_CREDENTIALS_RESPONSE } = require("./constants/errors/invalid.error.middleware");

const credentialsNotNullOrEmpty = async function (username, password) {
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

module.exports = { credentialsNotNullOrEmpty, values };
