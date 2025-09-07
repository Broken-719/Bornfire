const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../models/Product");

// image upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// GET all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// POST add product
router.post("/", upload.single("image"), async (req, res) => {
  const { name, stock, category, price, productId, description } = req.body;
  const image = req.file ? req.file.filename : null;

  const newProduct = new Product({ name, image, stock, category, price, productId, description });
  await newProduct.save();
  res.json(newProduct);
});

// PUT update product
router.put("/:id", upload.single("image"), async (req, res) => {
  const { name, stock, category, price, productId, description } = req.body;
  const image = req.file ? req.file.filename : undefined;

  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    { name, stock, category, price, productId, description, ...(image && { image }) },
    { new: true }
  );
  res.json(updated);
});

// DELETE product
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
