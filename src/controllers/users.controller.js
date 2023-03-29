const userController = async function (request, response, next) {
  const { username } = request.body;

  try {
    return response.status(200).json({
      success: true,
      message: {
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
      message: error,
    });
  }
};

module.exports = userController;
