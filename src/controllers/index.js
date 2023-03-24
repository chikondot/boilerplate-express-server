
const validateRequest =  async function (request, response, next) {
    // check if request headers application/json
    if (request.headers['content-type'] !== 'application/json') {
        return response.status(403).json({
            success: false,
            error: "Invalid ContentType"
        });
    }

    // check if body non null 
    if (!request.body) {
        return response.status(403).json({
            success: false,
            error: "Invalid RequestBody"
        });
    }

    next();
};

// 
const middleware = async function (request, response, next) {
    try {
        return response.status(200).json({
            success: true,
            message: "Successful Response"
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: "Request Failed",
            stack: error
        });
    }
}

module.exports = {
    validateRequest, middleware
};