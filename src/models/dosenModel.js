const mongoose = require('mongoose');
const dosenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    matkul: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('dosen', dosenSchema);
