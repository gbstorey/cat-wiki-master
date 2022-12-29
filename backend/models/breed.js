const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const breedSchema = new Schema({
    id: String,
    name: String,
    views: Number,
    vcahospitals_url: String,
    cfa_url: String,
    vetstreet_url: String,
});

module.exports = mongoose.model("Breeds", breedSchema);