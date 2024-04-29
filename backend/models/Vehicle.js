const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    chasisSeries:{
        type: Number,
        required: true
    },
    makeYear:{
        type: Number,
        required: true,
        unique: true
    },
    engineType:{
        type: String,
        required: true,
        enum: ["Diesel", "Gasoline", "Hybrid", "Electric"]
    },
    engineCapacity:{
        type: Number,
        required: true,
    },
    power:{
        type: Number,
        required: true
    }, 
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
},{
    collection: "Vehicles"
})

module.exports = mongoose.model("Vehicles", vehicleSchema)
