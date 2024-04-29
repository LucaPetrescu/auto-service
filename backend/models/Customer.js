const mongoose = require("mongoose");
const { type } = require("os");

const customerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber:{
        type: String,
        required: true
    },
    CNP:{
        type: Number,
        required: true,
        unique: true
    },
    vehichesOwned: [{type: mongoose.Schema.Types.ObjectId, ref: "Vehicle"}]
},{
    collection: "Customers"
})

module.exports = mongoose.model("Customers", customerSchema)

