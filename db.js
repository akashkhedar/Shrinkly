const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/urlshortner";

const connectToMongo = () => {
    mongoose.connect(mongoURI)
    .then((res) => console.log("connected successfully"))
    .catch((err) => console.error(err))
}

module.exports = connectToMongo;