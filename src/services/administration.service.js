const {
  findAllUsers,
  findUser,
  userExists,
  userExistsAndIsAdmin,
  createUser,
} = require("./databases/mongodb/collection/user.mongodb");
const {
  createAuthenticatedUser,
} = require("./databases/mongodb/collection/authentication.mongodb");
const {
  createUserObject,
  createAuthenticationObject,
} = require("../middlewares/objects");

class AdministrationService {
  /**
   * @description Attempt to create a user with provided object
   * @param request {object} Object containing required feilds
   * @returns {Promise<{success: boolean, message: *} | Error>}
   */
  async create(request) {
    try {
      const { username, user } = request;

      // NOTE :: REDO! ------------------------------------------------
      const isAdmin = await userExistsAndIsAdmin(username);
      if (!isAdmin) {
        throw "User is not Administrator, Can't this perform action";
      }

      const existingUser = await userExists(user.username);
      if (existingUser) {
        // TODO :: use and update mongodb statement that upserts when a user already exists?
        throw "User already exists";
      }

      const authCreationObject = await createAuthenticationObject(user);
      const userCreationObject = await createUserObject(user);

      await createAuthenticatedUser(authCreationObject);
      await createUser(userCreationObject);
      // ----------------------------------------------------------------

      return { success: true, message: "created." };
    } catch (error) {
      console.error(`[AdministrationService.create] error: ${error}`);
      throw error;
    }
  }

  /**
   * @description Return specific user with provided username OR default to return all users
   * @param username {String} String[Optional] of required username
   * @returns {Promise<{success: boolean, message: *} | Error>}
   */
  async view(username) {
    try {
      var user;
      if (username && username !== "") {
        user = await findUser(username);
      } else {
        user = await findAllUsers();
      }

      if (!user) {
        throw `Failed to find a user for ${username}`;
      }

      return { success: true, message: user };
    } catch (error) {
      console.error(`[AdministrationService.view] error: ${error}`);
      throw error;
    }
  }
}

module.exports = AdministrationService;
