const validator = require("../middleware/validation.middleware");
const encryptor = require("../middleware/encryption.middleware");

class AuthenticationService {
  async validateCredentials(username, password) {
    try {
      await validator.credentialsNotNullOrEmpty(username, password);

      // check if user exists and stop
      // await validator.userExists();

      // TODO :: do a db check to match username password
    } catch (error) {
      console.error(
        `[AuthenticationService.validateCredentials] error: ${error}`
      );
      throw error;
    }
  }

  async generateSession() {
    try {
      
    } catch (error) {
      console.error(`[AuthenticationService.generateSession] error: ${error}`);
      throw error;
    }
  }
  async validateSession() {}
  async persistSession() {}
}

module.exports = { AuthenticationService };
