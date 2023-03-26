const { findUser, createUser } = require("../database/mongodb/collection/user");

const adminCreateController = async function (request, response, next) {
  /**
   * username: check if username exists and has isAdmin priviledge
   * user: user object to be validated and created
   */
  const { username, user } = request.body;

  try {
    await createUser(user);

    return response.status(200).json({
      success: true,
      message: "Successfully Created",
    });
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error,
    });
  }
};

module.exports = adminCreateController;
