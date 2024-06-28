const express = require('express');
const cors = require('cors');
const DB = require("./db");
const flightrouter=require("./Flight");
const passengerrouter = require('./Passenger');
DB.connectDB();

const app = express();
app.use(cors());
app.use(express.json())

app.use('/flight', flightrouter);
app.use('/passenger', passengerrouter);

app.listen(3001,()=> console.log("Hello World"));