const mongoose = require('mongoose')
const moment = require('moment')
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: moment().format()
    } 
})

module.export = mongoose.model('User', userSchema)