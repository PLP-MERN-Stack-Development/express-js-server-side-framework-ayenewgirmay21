// middleware/validateProduct.js
function validateProduct(req, res, next) {
  const { name, description, price, category, inStock } = req.body;

  if (!name || !description || !category) {
    return res.status(400).json({ error: "Name, description, and category are required." });
  }

  if (typeof price !== "number" || price < 0) {
    return res.status(400).json({ error: "Price must be a positive number." });
  }

  if (typeof inStock !== "boolean") {
    return res.status(400).json({ error: "inStock must be a boolean value." });
  }

  next(); // validation passed
}

module.exports = validateProduct;
