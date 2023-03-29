const {
  userExists,
  userExistsAndIsAdmin,
  createUser,
} = require("../databases/mongodb/collection/user.mongodb");
const {
  createAuthenticatedUser,
} = require("../databases/mongodb/collection/authentication.mongodb");
const {
  createUserObject,
  createAuthenticationObject,
} = require("../utils/objects");

const adminCreateController = async function (request, response, next) {
  /**
   * username: check if user exists and has admin priviledge
   * user: user object to be validated and created
   */
  const { username, user } = request.body;

  try {
    const isAdmin = await userExistsAndIsAdmin(username);
    if (!isAdmin) {
      throw "User is not Administrator, Can't this perform action";
    }

    const existingUser = await userExists(user.username);
    if (existingUser) {
      // TODO :: perform update
      throw "User already exists";
    }

    const authCreationObject = await createAuthenticationObject(user);
    const userCreationObject = await createUserObject(user);

    await createAuthenticatedUser(authCreationObject);
    await createUser(userCreationObject);
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
