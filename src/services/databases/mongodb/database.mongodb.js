require("dotenv").config();

const DEV_URL = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`;
const PROD_URL = `mongodb://username:password@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/?authSource=admin`;

const { MongoClient } = require("mongodb");
const client = new MongoClient(
  process.env.RUN_ENVIRONMENT === "production" ? PROD_URL : DEV_URL
);

const Query = async function (operations) {
  try {
    await client.connect();
    const db = client.db(process.env.MONGODB_DB);
    return await operations(db);
  } catch (error) {
    console.error(`[mongodb] an error has occured.\n${error.stack}`);
    throw error; // TODO :: extend error handling
  } finally {
    await client.close();
  }
};

module.exports = { Query };
