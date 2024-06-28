const {Router} =require("express");
const { get, add, update, remove, move } = require("./controller");

const passengerrouter= Router();

passengerrouter.get("/get", get)
passengerrouter.post("/add", add)
passengerrouter.put("/update", update)
passengerrouter.delete("/remove", remove)
passengerrouter.post("/move", move)



module.exports=passengerrouter;

