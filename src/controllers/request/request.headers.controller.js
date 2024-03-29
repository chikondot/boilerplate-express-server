const {
  INVALID_CONTENT_TYPE_HEADER,
  INVALID_SESSIONID_HEADER,
  INVALID_USER_AGENT_HEADER,
  MISSING_SESSIONID_HEADER,
} = require("../../middleware/constants/errors/invalid.error.middleware");

const headerController = async function (request, response, next) {
  if (request.path !== "/authentication") {
    if (!request.headers["session-id"]) {
      return responseError(response, MISSING_SESSIONID_HEADER);
    }

    // TODO :: DB check for session header to auth requests
    if (request.headers["session-id"] !== "0123456789") {
      return responseError(response, INVALID_SESSIONID_HEADER);
    }
  }

  if (request.headers["content-type"] !== "application/json") {
    return responseError(response, INVALID_CONTENT_TYPE_HEADER);
  } else if (request.headers["user-agent"] !== "chikondot") { // TODO :: when nginx introduced only allow filtered requests
    return responseError(response, INVALID_USER_AGENT_HEADER);
  } else {
    next();
  }
};

function responseError(response, message) {
  return response.status(403).json({
    success: false,
    error: message,
  });
}


async function isValidSession(sessionId) {}

module.exports = headerController;
