const restrictRole = require("../middlewares/restrictRole");
const url = require("../models/url");

const viewHome = async (req, res) => {
  if (!req.user) {
    return res.redirect("/login");
  } else {
    const urls = await url.find({ createdBy: req.user._id });
    res.render("home", {
      urls: urls,
    });
  }
};

module.exports = viewHome;
