const mongoose = require('mongoose');

// ini masih tentative ya. nanti bisa diubah sesuai kebutuhan attribute-attributenya gais.
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'admin'
    }
}, { timestamps: true });

module.exports = mongoose.model('Admin', adminSchema);
