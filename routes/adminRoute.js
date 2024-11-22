const express = require('express')

const router = express.Router()

router.get('/allurls', require('../controllers/adminView'))

module.exports = router