const hasValidHeaders = async function (request, response, next) {
  console.log(`[chikondot] in func hasValidHeaders!`);
  return (request.headers["content-type"] !== "application/json")
    ? response.status(403).json({
        success: false,
        error: "Invalid ContentType",
      })
    : next();
};

// TODO :: refine and update this
const hasBody = function (request, response, next) {
  console.log(`[chikondot] in func hasBody!: ${typeof request.body}`);

  return !request.body
    ? response.status(403).json({
        success: false,
        error: "Invalid RequestBody",
      })
    : next();
};

const hasValidCredentials = async function(username, password) {
    if (!username || !password) {
        console.error(`[chikondot] username: ${username}, password: ${password}`);
        return false
    }

    return true 
};



module.exports = { hasBody, hasValidHeaders, hasValidCredentials };
