const shortid = require("shortid");
const url = require("../models/url");

const generateShortUrl = async(req, res) => {
  const body = req.body;
  if (!body.url) {
    res.status(400).json("Field cannot be empty");
  } else {
    console.log(req.user._id);
    
    const nanoId = shortid.generate();
    await url.create({
      shortId: nanoId,
      redirectUrl: body.url,
      visitHistory: [],
      createdBy: req.user._id
    });
    res.render('home', {
      id: nanoId
    })
  }
}

module.exports = generateShortUrl;
