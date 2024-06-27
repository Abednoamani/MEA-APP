const {Router} =require("express");
const { get, add } = require("./controller");

const flightrouter= Router();

flightrouter.get("/get", get)
flightrouter.post("/add", add)



module.exports=flightrouter;

