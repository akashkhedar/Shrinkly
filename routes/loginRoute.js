const express = require('express')

const router = express.Router()

router.get('/login', require('../controllers/login'))

module.exports = router