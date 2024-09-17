const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  updateProduct,
  postProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.put("/:id", updateProduct);
router.post("/", postProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
