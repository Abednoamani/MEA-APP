const mongoose = require("mongoose");

const uri = 'mongodb+srv://abednaamani692:Abed123456@cluster0.spklthh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

exports.connectDB=async()=>{
    try {
        await mongoose.connect(uri,{useNewUrlParser: true});
        console.log("Connected to Database");
    }catch(err){
        console.log(err);
    }
};
exports.disconnectDB=async()=>{
    await mongoose.disconnect();

};