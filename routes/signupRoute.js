const express = require('express')

const router = express.Router()

router.get('/signup', require('../controllers/signup'))

module.exports = router