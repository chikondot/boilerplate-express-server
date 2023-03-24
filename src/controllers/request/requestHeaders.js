const {
  INVALID_CONTENT_TYPE_HEADER,
  INVALID_SESSIONID_HEADER,
  INVALID_USER_AGENT_HEADER,
  MISSING_SESSIONID_HEADER,
} = require("../../utils/errors/invalid");

const headerController = async function (request, response, next) {
  if (request.headers["content-type"] !== "application/json") {
    return responseError(response, INVALID_CONTENT_TYPE_HEADER);
  } else if (request.headers["user-agent"] !== "chikondot") {
    return responseError(response, INVALID_USER_AGENT_HEADER);
  }

  if (request.path !== "/authentication") {
    if (!request.headers["session-id"]) {
      return responseError(response, MISSING_SESSIONID_HEADER);
    }

    // TODO :: DB check for session header to auth requests
    if (request.headers["session-id"] !== "0123456789") {
      return responseError(response, INVALID_SESSIONID_HEADER);
    }
  }

  next();
};

function responseError(response, message) {
  return response.status(403).json({
    success: false,
    error: message,
  });
}

module.exports = headerController;
