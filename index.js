const express = require("express");
const connectToMongo = require("./db");
const path = require('path')
const url = require('./models/url')
const cookieParser = require('cookie-parser');
const checkAuthentication = require("./middlewares/checkAuthentication");
const restrictRole = require("./middlewares/restrictRole");

connectToMongo();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(checkAuthentication)
app.set("view engine", "ejs")
app.set('views', path.resolve('./views'))

app.get('/allurls', restrictRole(["ADMIN"]), require('./routes/adminRoute'))
app.get('/', restrictRole(["NORMAL", "ADMIN"]),require('./routes/homeRoute'))
app.get('/url/:id', require('./routes/showURL'))
app.post('/create/url', require('./routes/createURL'))
app.post('/user/signup', require('./routes/userSignup'))
app.get('/signup', require('./routes/signupRoute'))
app.post('/user/login', require('./routes/userLogin'))
app.get('/login', require('./routes/loginRoute'))

app.listen(port, () => console.log(`Server started: ${port}!`));
