const url = require("../models/url")

const adminView = async(req, res) => {
    const urls = await url.find({})
    res.render("home", {
        urls:urls
    })
}

module.exports = adminView