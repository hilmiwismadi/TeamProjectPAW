const express = require("express");
const router = express.Router();
const {
  getMahasiswaAll,
  getMahasiswa,
  updateMahasiswa,
  postMahasiswa,
  deleteMahasiswa,
} = require("../controllers/MahasiswaController.js");

router.get("/", getMahasiswaAll);
router.get("/:id", getMahasiswa);
router.put("/:id", updateMahasiswa);
router.post("/", postMahasiswa);
router.delete("/:id", deleteMahasiswa);

module.exports = router;
