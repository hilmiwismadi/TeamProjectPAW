const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const {
  getAssignments,
  getAssignment,
  postAssignment,
  updateAssignment,
  deleteAssignment,
} = require("../controllers/assignment.controller.js");

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Routes
router.get("/", getAssignments);
router.get("/:id", getAssignment);
router.post("/", upload.single('image'), postAssignment);
router.put("/:id", upload.single('image'), updateAssignment);
router.delete("/:id", deleteAssignment);

module.exports = router;