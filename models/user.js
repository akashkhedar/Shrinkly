const mongoose = require('mongoose');
const { createHmac, randomBytes } = require("node:crypto");
const { setUser } = require('../service/auth');

const { Schema } = mongoose

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    default: "NORMAL",
  },
  salt: {
    type: String,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return;
  }
  const salt = randomBytes(16).toString();
  const hashedPassword = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  this.salt = salt;
  this.password = hashedPassword;

  next();
});

userSchema.static("passMatchTokenCreate", async function (email, password) {
  const user = await this.findOne({ email });
  const salt = user.salt;
  const currentHashedPass = user.password;
  const givenHashedPass = createHmac("sha256", salt)
    .update(password)
    .digest("hex");

  if (currentHashedPass !== givenHashedPass) {
    throw new Error("Incorrect Password!");
  }
  const token = setUser(user);
  return token;
});

const user = mongoose.model('userModel', userSchema)

module.exports = user