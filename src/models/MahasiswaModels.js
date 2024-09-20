const mongoose = require("mongoose");

const MahasiswaSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter student name"],
    },
    nim: {
        type: String,
        required: [true, "Please enter student ID"]
    },
    username: {
        type: String,
        required: [true, "Please enter username"],
    },
    password: {
        type: String,
        required: [true, "Please enter password"],
    },
},
  {
    timestamps: true,
  }  
);

const Mahasiswa = mongoose.model("Mahasiswa", MahasiswaSchema);

module.exports = Mahasiswa;