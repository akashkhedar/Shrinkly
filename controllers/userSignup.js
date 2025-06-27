const User = require("../models/user");
const { setUser } = require("../service/auth");

const handleSignup = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({
    name,
    password,
    email,
  });
  const savedUser = await newUser.save();
  const token = setUser(savedUser);
  res.cookie("token", token);
  res.redirect("/");
};

module.exports = handleSignup;
