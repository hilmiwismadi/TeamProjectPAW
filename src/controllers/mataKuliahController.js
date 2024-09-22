const mataKuliah = require("../models/mataKuliahModels.js");

//add mata kuliah baru
const createMataKuliah = async(req, res)=>{
  try {
    const {name, lecturer, schedule, classroom} = req.body;
    const newMataKuliah = new mataKuliah({name, lecturer, schedule, classroom});
    await newMataKuliah.save();
    res.status(201).json(newMataKuliah);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

//read all mata kuliah
const readAllMataKuliah = async(req, res)=>{
try {
  const mataKuliah = await mataKuliah.find();
  res.status(200).json(mataKuliah);
} catch (error) {
  res.status(500).json({message:error.message});
}
};

//read mata kuliah by id
const readMataKuliah = async(req, res)=>{
try {
  const {id} = req.params;
  const mataKuliah = await mataKuliah.findById(id);
  if (!mataKuliah) {
    return res.status(404).json({ message:"mata kuliah not found"});
  }
  res.status(200).json(mataKuliah);
} catch (error) {
  res.status(500).json({ message: error.message });
}
};

//update dosen
const updateMataKuliah = async(req, res)=>{
try {
  const {id} = req.params;
  const {name, lecturer, schedule, classroom} = req.body;
  const updatedMataKuliah = await mataKuliah.findByIdAndUpdate(
    id,
    { name, lecturer, schedule, classroom },
    { new:true, runValidators:true }
  );
  if (!updateMataKuliah) {
    return res.status(404).json({ message: "mata kuliah not found" });
  }
  res.status(200).json(updatedMataKuliah);
} catch (error) {
  res.status(500).json({ message:error.message });
}
};


//delete mata kuliah
const deleteMataKuliah = async(req, res)=>{
try {
  const {id} = req.params;
  const deletedMataKuliah = await mataKuliah.findByIdAndDelete(id);
  if (!deletedMataKuliah) {
    return res.status(404).json({ message: "mata kuliah not found" });
  }
  res.status(200).json({ message: "mata kuliah deleted" });
} catch (error) {
  res.status(500).json({ message: error.message });
}
};

module.exports = {
  createMataKuliah,
  readAllMataKuliah,
  readMataKuliah,
  updateMataKuliah,
  deleteMataKuliah,
};
