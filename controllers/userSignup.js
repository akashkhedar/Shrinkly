const User = require('../models/user')

const handleSignup = async(req, res) => {
    const { name, email, password } = req.body
    await User.create({
        name: name,
        email: email,
        password: password
    })
    res.render('home')
}

module.exports = handleSignup