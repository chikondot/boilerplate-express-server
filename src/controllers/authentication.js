const validator = require("../utils/validations");
const operator = require("../utils/operations");
const { INVALID_SESSION_RESPONSE } = require("../utils/errors/invalid");

const authController = async function (request, response, next) {
  const { username, password } = request.body;

  try {
    await validator.credentials(username, password);

    const uuid = await operator.session(username, password);
    await validator.values(uuid, INVALID_SESSION_RESPONSE);

    // TODO :: persist UUID so can be used to auth upcoming requests

    return response.status(200).json({
      success: true,
      message: "Autheticated",
      sessionId: uuid,
    });
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error,
    });
  }
};

module.exports = authController;
