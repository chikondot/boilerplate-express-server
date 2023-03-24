const uuid = require("uuid");

// TODO :: make into a DB check
const session = async function (username, password) {
  if (username == "chikondot" && password === "chikondot") {
    return uuid.v4();
  }

  return;
};

module.exports = { session };
