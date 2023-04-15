const { createHash } = require("./encryption.middleware");

const createAuthenticationObject = async function (user) {
  const hash = await createHash(`${user.username}:${user.password}`);
  return {
    username: user.username,
    hash: hash,
    sessionId: null,
    isActive: user.setAsActive,
  };
};

const createUserObject = async function (user) {
  return {
    username: user.username,
    fullName: user.fullName,
    emailAddress: user.emailAddress,
    contact: user.contact,
    isAdmin: user.setAsAdmin,
    extra: [],
  };
};

module.exports = { createUserObject, createAuthenticationObject };
