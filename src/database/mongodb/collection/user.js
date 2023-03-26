// TODO :: https://www.mongodb.com/docs/drivers/node/current/fundamentals/typescript/
const { query } = require("../index");

const findAll = async function() {
    query(async function (db) {
        let documents = await db.collection("users").find({});
        console.log(`[mongodb] found documents: ${documents}`);
      });
}

module.exports = {
    findAll
};