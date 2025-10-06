const express = require("express");
const router = express.Router();
const validateProduct = require("../middleware/validateProduct");
const NotFoundError = require("../errors/NotFoundError");

let products = [
  { id: 1, name: "Phone", description: "Android smartphone", price: 499, category: "Electronics", inStock: true },
  { id: 2, name: "Headphones", description: "Noise cancelling", price: 199, category: "Audio", inStock: true },
  { id: 3, name: "Laptop", description: "Gaming laptop", price: 1200, category: "Electronics", inStock: true },
  { id: 4, name: "Smartwatch", description: "Fitness tracker", price: 149, category: "Wearables", inStock: true },
  { id: 5, name: "Camera", description: "Digital camera", price: 899, category: "Electronics", inStock: false },
];

// ------------------- Advanced Features -------------------

// GET /api/products?category=Electronics&page=1&limit=2
router.get("/", (req, res) => {
  let { category, page = 1, limit = 5 } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);

  let filteredProducts = products;

  // Filter by category
  if (category) {
    filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  // Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  res.json({
    page,
    limit,
    total: filteredProducts.length,
    products: paginatedProducts,
  });
});

// GET /api/products/search?name=phone
router.get("/search", (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.status(400).json({ error: "Name query parameter is required" });
  }

  const results = products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );

  res.json(results);
});

// GET /api/products/stats
router.get("/stats", (req, res) => {
  const stats = {};

  products.forEach(p => {
    stats[p.category] = stats[p.category] ? stats[p.category] + 1 : 1;
  });

  res.json(stats);
});

// ------------------- Existing CRUD routes -------------------

// GET product by ID
router.get("/:id", (req, res, next) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return next(new NotFoundError("Product not found"));
  res.json(product);
});

// POST create
router.post("/", validateProduct, (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update
router.put("/:id", validateProduct, (req, res, next) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return next(new NotFoundError("Product not found"));

  Object.assign(product, req.body);
  res.json(product);
});

// DELETE product
router.delete("/:id", (req, res, next) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return next(new NotFoundError("Product not found"));

  products.splice(index, 1);
  res.json({ message: "Product deleted successfully" });
});

module.exports = router;
