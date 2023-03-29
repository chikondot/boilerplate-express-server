const {
  findUser,
  findAllUsers,
} = require("../databases/mongodb/collection/user.mongodb");

const adminViewController = async function (request, response, next) {
  const { username } = request.body;

  try {
    var user;
    if (username && username !== "") {
      user = await findUser(username);
    } else {
      user = await findAllUsers();
    }

    if (!user) {
      throw `Failed to find a user for ${username}`
    }

    return response.status(200).json({
      success: true,
      message: user,
    });
  } catch (error) {
    return response.status(400).json({
      success: false,
      message: error,
    });
  }
};

module.exports = adminViewController;
