const DEV_URL = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DB}`;
const PROD_URL = `mongodb://username:password@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/?authSource=admin`;

require("dotenv").config();

const { MongoClient } = require("mongodb");
const client = new MongoClient(
  process.env.NODE_ENV === "production" ? PROD_URL : DEV_URL
);

const query = async function (operations) {
  try {
    await client.connect();

    // perform query here
    const db = client.db(process.env.MONGODB_DB);

    await operations(db);
  } catch (error) {
    console.error(`[mongodb] an error has occured. ${error.stack}`);

    throw error; // TODO :: extend error handling
  } finally {
    console.log(`[mongodb] closing connection🛑`);
    await client.close();
  }
};

module.exports = { query };