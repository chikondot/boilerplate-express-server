// TODO :: https://www.mongodb.com/docs/drivers/node/current/fundamentals/typescript/
const { query } = require("../index");

const findAllUsers = async function () {
  const result = await query(async function (db) {
    return await db.collection("users").find({});
  });

  console.log(`[mongodb] documents found\n${JSON.stringify(result)}`);
  return result;
};

const findUser = async function (user) {
  const result = await query(async function (db) {
    return await db.collection("users").find({ username: user });
  });

  console.log(`[mongodb] document found\n${JSON.stringify(result)}`);
  return result;
};

const createUser = async function (document) {
  const result = await query(async function (db) {
    return await db.collection("users").insertOne(document);
  });

  if (result.acknowledged) {
    return {};
  } else {
    throw "Something" // refine.
  }

};

module.exports = {
  findAllUsers,
  findUser,
  createUser,
};
