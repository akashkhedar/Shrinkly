const User = require("../models/user");
const { setUser } = require("../service/auth");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)
  const user = await User.findOne({ email });
  const token = await User.passMatchTokenCreate(email, password);
  res.cookie("token", token);
  return res.redirect("/");
};

module.exports = userLogin;
