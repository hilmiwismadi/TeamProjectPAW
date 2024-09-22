const mongoose = require("mongoose");

const mataKuliahSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter course name"],
    },
    lecturer: {
        type: String,
        required: [true, "Please enter the lecturer's name"]
    },
    schedule: {
        type: String,
        required: [true, "Please enter the weekly schedule"],
    },
    classroom: {
        type: String,
        required: [true, "Please enter class location"],
    },
},
  {
    timestamps: true,
  }  
);

const mataKuliah = mongoose.model("mataKuliah", mataKuliahSchema);

module.exports = mataKuliah;