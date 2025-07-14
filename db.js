const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://admin:admin@shrinkly.mazdvii.mongodb.net/?retryWrites=true&w=majority&appName=Shrinkly";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then((res) => console.log("connected successfully"))
    .catch((err) => console.error(err));
};

module.exports = connectToMongo;
