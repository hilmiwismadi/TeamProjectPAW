const Assignment = require("../models/assignment.model.js");

// Get all assignments
const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({});
    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single assignment by ID
const getAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const assignment = await Assignment.findById(id);
    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }
    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new assignment
const postAssignment = async (req, res) => {
  try {
    const { author } = req.body;
    const image = req.file.filename; // file uploaded from multer

    const assignment = await Assignment.create({ author, image });
    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an assignment
const updateAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    if (req.file) {
      updatedData.image = req.file.filename;
    }

    const assignment = await Assignment.findByIdAndUpdate(id, updatedData, {
      new: true,
    });

    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.status(200).json(assignment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an assignment
const deleteAssignment = async (req, res) => {
  try {
    const { id } = req.params;
    const assignment = await Assignment.findByIdAndDelete(id);

    if (!assignment) {
      return res.status(404).json({ message: "Assignment not found" });
    }

    res.status(200).json({ message: "Assignment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAssignments,
  getAssignment,
  postAssignment,
  updateAssignment,
  deleteAssignment,
};