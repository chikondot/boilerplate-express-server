const AdministrationService = require("../services/administartion.service");
const AdministrationServiceInstance = new AdministrationService();

  /**
   * @description Controller for /admin/create path
   * @returns {{success: boolean, message: *} | {success: boolean, error: *}} JSON response to user
   */
const adminCreateController = async function (request, response, next) {
  try {
    // TODO :: check request.body has correct fields
    
    let result = await AdministrationServiceInstance.create(request.body);
    return response.status(200).json(result);
  } catch (error) {
    return response.status(400).json({
      success: false,
      error: error,
    });
  }
};

module.exports = adminCreateController;
