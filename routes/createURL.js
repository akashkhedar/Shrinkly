const express = require("express");
const router = express.Router();

router.post("/create/url", require('../controllers/generateURL'));

module.exports = router;