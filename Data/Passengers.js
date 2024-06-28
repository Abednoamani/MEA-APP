const mongoose = require('mongoose');
const Passengerschema = new mongoose.Schema({

    name: {
        type: String,
        max: 255,
        required: true
    },
    email: {
        type: String,
        max: 255,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    gender: {
        type: Boolean,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    seat: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },
    
    flight: {
        type: mongoose.Schema.ObjectId,
        ref: "Flight"
    },


})

module.exports = mongoose.model("Passengers", Passengerschema);