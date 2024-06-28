const Flights = require("../Data/Flights");

const get=async(req,res)=>{
    try {
        const flights=await Flights.find().populate("passengers");
        return res.status(200).json({
            message:"Flights fetched successfully",
            res:flights
        })
    }
    catch(err){console.log(err)}
}
const add= async(req,res)=>{
    try {
        console.log(req.body);
        arrival = Date.parse(req.body.ArrivalTime);
        depart = Date.parse(req.body.DepartureTime);
        const newflight=new Flights({...req.body, ArrivalTime: arrival, DepartureTime: depart});
        await newflight.save();
        return res.status(201).json({
            message:"Flights Created successfully",
            res:newflight
        })
    }
    catch(err){console.log(err)}
}

module.exports={get,add}
