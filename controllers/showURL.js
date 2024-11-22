const shortid = require("shortid");
const url = require("../models/url");

const showURL = async (req, res) => {
  const shortId = req.params.id;
  const redirectURL = await url.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(redirectURL.redirectUrl);
};

module.exports = showURL;
