const User = require("../models/user");
const { setUser } = require("../service/auth");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email: email,
    password: password,
  });
  if (!user) {
    return res.render("login");
  }
  const token = setUser(user);
  res.cookie("token", token);
  return res.redirect("/");
};

module.exports = userLogin;
