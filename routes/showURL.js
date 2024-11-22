const express = require('express')

const router = express.Router()

router.get('/url/:id', require('../controllers/showURL'))

module.exports = router