const bodyController = async function(request, response, next) {
    return !request.body || Object.keys(request.body).length === 0
      ? response.status(403).json({
          success: false,
          error: "Invalid RequestBody",
        })
      : next();
};

module.exports = bodyController;
