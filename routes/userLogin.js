const express = require('express')

const router = express.Router()

router.post('/user/login', require('../controllers/userLogin'))

module.exports = router