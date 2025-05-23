const mongoose = require('mongoose')

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
        default: 'NORMAL'
    }
})

const user = mongoose.model('userModel', userSchema)

module.exports = user