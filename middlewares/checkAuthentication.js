const { getUser } = require("../service/auth");

const checkAuthentication = async(req, res, next) => {
    const tokenValue = req.cookies?.token
    req.user = null
    if(!tokenValue){
        return next();
    }
    const user = getUser(tokenValue)
    req.user = user
    return next()
}

module.exports = checkAuthentication