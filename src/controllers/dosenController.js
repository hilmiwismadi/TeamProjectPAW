const Dosen = require("../models/dosenModel.js");

//membuat dosen baru
const createDosen = async(req, res)=>{
    try {
      const {name,matkul,email,password } = req.body;
      const newDosen = new Dosen({name,matkul,email,password});
      await newDosen.save();
      res.status(201).json(newDosen);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  };

//read all dosen
const readAllDosen = async(req, res)=>{
  try {
    const dosen = await Dosen.find();
    res.status(200).json(dosen);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};

//read dosen by id
const readDosen = async(req, res)=>{
  try {
    const {id} = req.params;
    const dosen = await Dosen.findById(id);
    if (!dosen) {
      return res.status(404).json({ message:"dosen not found"});
    }
    res.status(200).json(dosen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update dosen
const updateDosen = async(req, res)=>{
  try {
    const {id} = req.params;
    const {name,matkul,email,password} = req.body;
    const updatedDosen = await Dosen.findByIdAndUpdate(
      id,
      { name, matkul, email, password },
      { new:true, runValidators:true }
    );
    if (!updatedDosen) {
      return res.status(404).json({ message: "dosen not found" });
    }
    res.status(200).json(updatedDosen);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};


//delete dosen
const deleteDosen = async(req, res)=>{
  try {
    const {id} = req.params;
    const deletedDosen = await Dosen.findByIdAndDelete(id);
    if (!deletedDosen) {
      return res.status(404).json({ message: "dosen not found" });
    }
    res.status(200).json({ message: "dosen deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
    createDosen,
    readAllDosen,
    readDosen,
    updateDosen,
    deleteDosen,
};
