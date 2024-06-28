const mongoose = require('mongoose');
const flightschema = new mongoose.Schema({

    flightnumber: {
        type: String,
        required: true,
        minLength: 1,
        maxLenghth: 255
    },
    PassengerCount: {
        type: String,
        required: true,
        minLength: 1,
        maxLenghth: 200

    },

    ArrivalTime: {
        type: Date,
        required: true,
    },
    DepratureTime: {
        type: Date,
        required: true,
    },
    cost:{
        type:Number,
        required:true
    },
    arrivallocation:{
        type: String,
        required: true,
        minLength: 1,
        maxLenghth: 200
    },
    departurelocation: {
        type: String,
        required: true,
        minLength: 1,
        maxLenghth: 200
    },
    
    picpath:{
        type:String,
        required:true,
        maxLenghth:255,
    },
    passengers: [{
        type: mongoose.Schema.ObjectId,
        ref: "Passenger"
    }],
    
}




)

module.exports=mongoose.model("Flight",flightschema);