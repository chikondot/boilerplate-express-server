// TODO :: https://www.mongodb.com/docs/drivers/node/current/fundamentals/typescript/
const { query } = require("../index");

const createAuthenticatedUser = async function (document) {
  const result = await query(async function (db) {
    return await db.collection("authentication").insertOne(document);
  });

  if (result.acknowledged) {
    return;
  } else {
    throw "Failed to create authentication object";
  }
};

const createSession = async function (sessionId) {};

// TODO :: add check for isActive
const isAuthenticatedUser = async function () {
  return await query(async function (db) {
    const result = await db
      .collection("authentication")
      .countDocuments({ username: username });
    if (result && result > 0) {
      return true;
    }

    return false;
  });
};

module.exports = {
  createAuthenticatedUser,
  createSession,
  isAuthenticatedUser,
};
