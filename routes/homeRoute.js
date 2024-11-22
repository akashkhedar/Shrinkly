const express = require('express')

const router = express.Router()

router.get('/', require('../controllers/staticView'))

module.exports = router