const mongoose = require("mongoose");

const AssignmentSchema = mongoose.Schema(
  {
    author: {
      type: String,
      required: [true, "Please enter the author's name"],
    },
    image: {
      type: String,
      required: [true, "Please upload an assignment image"],
    },
  },
  {
    timestamps: true,
  }
);

const Assignment = mongoose.model("Assignment", AssignmentSchema);

module.exports = Assignment;