const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
    name:{type:String,required:true},
    engine:{type:String,required:true},
    numberOfDoors:Number
});

module.exports = mongoose.model('Car',carSchema);