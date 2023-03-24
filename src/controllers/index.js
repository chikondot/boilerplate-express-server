const validation = async function (request, response, next) {
  // check if request headers application/json
  if (request.headers["content-type"] !== "application/json") {
    return response.status(403).json({
      success: false,
      error: "Invalid ContentType",
    });
  }

  next();
};

const authentication = async function (request, response, next) {
  try {
    return response.status(200).json({
      success: true,
      message: "Successful Autheticated",
      sessionId: "123456789",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "Authentication Failed",
      stack: error,
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
        other: []
      }
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: "Request Failed",
      stack: error,
    });
  }
};

module.exports = {
    validation, authentication, user
};
