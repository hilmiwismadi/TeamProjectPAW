const mongoose = require('mongoose');
const dosenSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },  
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('dosen', dosenSchema);
