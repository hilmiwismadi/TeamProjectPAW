const Mahasiswa = require("../models/MahasiswaModels.js");

// Get all Mahasiswa
const getMahasiswaAll = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.find();
    res.status(200).json(mahasiswa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Mahasiswa by ID
const getMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findById(req.params.id);
    if (!mahasiswa) {
      return res.status(404).json({ message: "Mahasiswa not found" });
    }
    res.status(200).json(mahasiswa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new Mahasiswa
const postMahasiswa = async (req, res) => {
  const { name, nim, username, password } = req.body;
  try {
    const newMahasiswa = new Mahasiswa({ name, nim, username, password });
    await newMahasiswa.save();
    res.status(201).json(newMahasiswa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Mahasiswa
const updateMahasiswa = async (req, res) => {
  const { name, nim, username, password } = req.body;
  try {
    const mahasiswa = await Mahasiswa.findByIdAndUpdate(
      req.params.id,
      { name, nim, username, password },
      { new: true, runValidators: true }
    );
    if (!mahasiswa) {
      return res.status(404).json({ message: "Mahasiswa not found" });
    }
    res.status(200).json(mahasiswa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Mahasiswa
const deleteMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.findByIdAndDelete(req.params.id);
    if (!mahasiswa) {
      return res.status(404).json({ message: "Mahasiswa not found" });
    }
    res.status(200).json({ message: "Mahasiswa deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMahasiswaAll,
  getMahasiswa,
  postMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
};
