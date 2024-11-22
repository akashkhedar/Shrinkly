const express = require('express')

const router = express.Router()

router.post('/user/signup', require('../controllers/userSignup'))

module.exports = router