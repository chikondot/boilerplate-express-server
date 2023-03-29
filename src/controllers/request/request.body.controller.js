// TODO :: get this working 
const bodyController = async function(request, response, next) {
    return !request.body
      ? response.status(403).json({
          success: false,
          error: "Invalid RequestBody",
        })
      : next();
};

module.exports = bodyController;
