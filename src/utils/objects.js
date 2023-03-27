const { createHash } = require("./encryption");

// TODO :: all validations to be handled here
const createUserObject = async function (user) {
  const hash = await createHash(`${user.username}:${user.password}`);
  return {
    username: user.username,
    hash: hash,
    sessionId: null,
    isActive: user.setAsActive,
  };
};

const createAuthenticationObject = async function (user) {
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
