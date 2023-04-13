// TODO :: https://www.mongodb.com/docs/drivers/node/current/fundamentals/typescript/
const { Query } = require("../database.mongodb");

const findAllUsers = async function () {
  return await Query(async function (db) {
    return await db
      .collection("users")
      .find({}, { projection: { _id: 0 } })
      .toArray();
  });
};

const findUser = async function (user) {
  return await Query(async function (db) {
    return await db
      .collection("users")
      .findOne({ username: user }, { projection: { _id: 0 } });
  });
};

const userExists = async function (username) {
  return await Query(async function (db) {
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
  return await Query(async function (db) {
    const result = await db.collection("users").findOne({ username: username });
    if (result && result.isAdmin) {
      return true;
    }

    return false;
  });
};

// TODO :: implement updateOrCreateUser: `https://www.mongodb.com/docs/manual/reference/method/db.collection.update/#std-label-upsert-behavior`
const createUser = async function (document) {
  const result = await Query(async function (db) {
    return await db.collection("users").insertOne(document);
  });

  if (result.acknowledged) {
    return;
  } else {
    throw "Failed to create user object";
  }
};

module.exports = {
  findAllUsers,
  findUser,
  userExists,
  userExistsAndIsAdmin,
  createUser,
};
