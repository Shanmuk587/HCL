const mongoose = require('mongoose');
const CrcSchema = new mongoose.Schema({
    username: String,
    password: String
});
const Crc = mongoose.model("Crc", CrcSchema);
module.exports = {Crc};