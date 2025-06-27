const jwt = require("jsonwebtoken");
const SECRET = "sonicBOOM";

const setUser = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      role: user.role,
      name:user.name
    },
    SECRET
  );
};

const getUser = (token) => {
  if (!token) {
    return null;
  }
  try {
    return jwt.verify(token, SECRET);
  } catch (error) {
    return null;
  }
};

module.exports = {
  setUser,
  getUser,
};
