// TODO :: https://www.mongodb.com/docs/drivers/node/current/fundamentals/typescript/
const { query } = require("../index");

const countEstimate = async function() {
  query(async function (db) {
    let estimate = await db.collection("authentication").estimatedDocumentCount();
    console.log(`[mongodb] found estimate: ${estimate}`);
  });
};

const findAll = async function() {
    query(async function (db) {
        let documents = await db.collection("authentication").find({});
        console.log(`[mongodb] found documents: ${documents}`);
      });
}

module.exports = {
    countEstimate, findAll
};