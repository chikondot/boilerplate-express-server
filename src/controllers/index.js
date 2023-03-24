const validator = require("../utils/validations");
const operator = require("../utils/operations");

const authentication = async function (request, response, next) {
  const { username, password } = request.body;

  try {
    checkValue(
      await validator.hasValidCredentials(username, password),
      "Invalid Credentials"
    );

    const uuid = await operator.session(username, password)
    checkValue(
      uuid,
      "Failed to create session"
    );

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

const user = async function (request, response, next) {
  try {
    return response.status(200).json({
      success: true,
      message: "Successful Response",
      body: {
        username: "chikondot",
        fullName: "Ty Tongai Munashe Chikondo",
        emailAddress: "tychi96@outlook.com",
        contact: 123456789,
        isActive: true,
        other: [],
      },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "Request Failed",
      stack: error,
    });
  }
};

function checkValue(check, message) {
  if (!check) {
    throw message;
  }

  return;
}

module.exports = {
  authentication,
  user,
};
