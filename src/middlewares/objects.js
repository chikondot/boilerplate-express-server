const { createHash } = require("./encryption.middleware");

// TODO :: all validations to be handled here
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

// OPTION :: move this into a single class
class UserObjects {
  constructor(user) {
    this.user = user;
  }

  async authentication() {
    const hash = await createHash(`${user.username}:${user.password}`);
    return {
      username: user.username,
      hash: hash,
      sessionId: null,
      isActive: user.setAsActive,
    };
  }

  async get() {
    return {
      username: user.username,
      fullName: user.fullName,
      emailAddress: user.emailAddress,
      contact: user.contact,
      isAdmin: user.setAsAdmin,
      extra: [],
    };
  }
}

module.exports = { createUserObject, createAuthenticationObject };
