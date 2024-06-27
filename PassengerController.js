const Flights = require("./Flights.js");
const Passengers = require("./Passengers.js");


const get = async (req, res) => {
    try {
        const passenger = await Passengers.findById(req.params.id).populate('flight');
        return res.status(200).json({
            message: "Passenger fetched successfully",
            res: passenger
        });

    } catch (err) { console.log(err) };


};


const add = async (req, res) => {
    try {
        const newPassenger = new Passengers(req.body);
        const flight = await Flights.findByIdAndUpdate(req.body.flight, {passengers: flight.passengers.push(flight)}, {new: true});
        await newPassenger.save();
        return res.status(201).json({
            message: "Passenger created successfully",
            res: newPassenger
        });
    } catch (err) { console.log(err) };

}



const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPassenger = await Passengers.findByIdAndUpdate(id, req.body, { new: true });
        return res.status(200).json({
            message: "Passenger updated successfully",
            res: updatedPassenger
        });
    } catch (err) { console.log(err) };

}



const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await Passengers.findByIdAndDelete(id);
        return res.status(200).json({
            message: "Passenger deleted"
        });
    } catch (err) { console.log(err) };

}

const move = async (req, res) => {
    await Passengers.findByIdAndDelete(req.body.id);
    // passenger.deleted = true
    const flight1 = await Flights.findById(req.body.flightR);
    const newPass1 = flight1.passengers.filter((passenger)=> {return passenger._id != req.body.id})
    const flight = await Flights.findByIdAndUpdate(req.body.flight, {passengers: newPass1}, {new: true});
    await Flights.findByIdAndUpdate(req.body.flightU, {passengers: flight.passengers.push(flight)}, {new: true});
    await Passenger.findByIdAndUpdate(req.body.id,{Flight:req.body.flightU}, {new: true} );
    return res.status(200).json({
        message: "Passenger moved successfully"
    })
}


module.exports = { get, add, update, remove };
