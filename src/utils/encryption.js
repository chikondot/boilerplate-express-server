const bcrypt = require("bcrypt");
const saltRounds = 10;

const createHash = async function (value) {
  try {
    return await bcrypt.hash(value, saltRounds);
  } catch (error) {
    throw error;
  }
};

const isValidHash = async function (value, hash) {
  try {
    return await bcrypt.compare(value, hash);
  } catch (error) {
    throw error;
  }
};

module.exports = { createHash, isValidHash };
