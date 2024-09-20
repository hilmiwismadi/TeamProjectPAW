const Dosen = require("../models/dosenModel.js");

//create new dosen
const createDosen=(req,res)=>{
    const newDosen = new Dosen({
      name: req.body.name,
      matkul: req.body.matkul,
      email: req.body.email,
      password: req.body.password,
    });
  
    newDosen.save((error) => {
      if (error) {
        res.status(500).json({message:error.message});
      } else {
        req.session.message={
          type:"success",
          message:"dosen created",
        };
        res.status(201).json(newDosen);
      }
    });
  };

//read dosen
const readAllDosen=(req,res)=>{
  Dosen.find((error,dosen)=>{
    if (error) {
      res.status(500).json({message:error.message});
    } else {
      res.status(200).json(dosen);
    }
  });
};

//read dosen by id
const readDosen=(req,res)=>{
  let id = req.params.id;
  Dosen.findById(id,(error,dosen)=>{
    if (error) {
      res.status(500).json({message:error.message});
    } else if (!dosen) {
      res.status(404).json({message:"dosen not found"});
    } else {
      res.status(200).json(dosen);
    }
  });
};

//update dosen
const updateDosen=(req,res)=>{
  let id = req.params.id;
  Dosen.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      matkul: req.body.matkul,
      email: req.body.email,
      password: req.body.password,
    },
    (error,result)=>{
      if (error) {
        res.json({ message:error.message});
      } else {
        req.session.message = {
          type:"success",
          message:"dosen updated",
        };
        res.status(200).json(result);
      }
    }
  );
};

//delete dosen
const deleteDosen=(req,res)=>{
  let id = req.params.id;
  Dosen.findByIdAndDelete(id, (error, result) => {
    if (error) {
      res.json({ message: error.message});
    } else if (!result) {
      res.status(404).json({ message:"dosen not found"});
    } else {
      req.session.message = {
        type:"success",
        message:"dosen deleted",
      };
      res.status(200).json({ message:"dosen deleted"});
    }
  });
};

module.exports={
    createDosen,
    readAllDosen,
    readDosen,
    updateDosen,
    deleteDosen,
};
