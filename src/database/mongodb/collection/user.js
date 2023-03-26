// TODO :: https://www.mongodb.com/docs/drivers/node/current/fundamentals/typescript/
const { query } = require("../index");

const findAllUsers = async function () {
  return await query(async function (db) {
    return await db.collection("users").find({});
  });
};

const findUser = async function (user) {
  return await query(async function (db) {
    return await db.collection("users").find({ username: user });
  });
};

const userExists = async function (username) {
  return await query(async function (db) {
    const result = await db
      .collection("users")
      .countDocuments({ username: username });
    if (result && result > 0) {
      return true;
    }

    return false;
  });
};

const userExistsAndIsAdmin = async function (username) {
  return await query(async function (db) {
    const result = await db.collection("users").findOne({ username: username });
    if (result && result.isAdmin) {
      return true;
    }

    return false;
  });
};

const createUser = async function (document) {
  const result = await query(async function (db) {
    return await db.collection("users").insertOne(document);
  });

  if (result.acknowledged) {
    return;
  } else {
    throw "No Result";
  }
};

module.exports = {
  findAllUsers,
  findUser,
  userExists,
  userExistsAndIsAdmin,
  createUser,
};
