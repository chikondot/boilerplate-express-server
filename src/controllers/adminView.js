const { findUser } = require("../database/mongodb/collection/user");

const adminViewController = async function (request, response, next) {
  const { username } = request.body;

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
    return response.status(400).json({
      success: false,
      message: error,
    });
  }
};

module.exports = adminViewController;
