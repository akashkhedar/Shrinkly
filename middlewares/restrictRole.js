const restrictRole = (role = ["NORMAL", "ADMIN"]) => {
    return function(req, res, next) {
        if(!req.user){
            return res.redirect('/login')
        }
        if(!role.includes(req.user.role)){
            return res.end('Unauthorized')
        }
        return next()
    }
}

module.exports = restrictRole