const express = require("express");
const Product = require("./data");

const product = new Product([
  {
    id: 1,
    name: "Milk",
    description: "1 Gallon of Whole Milk",
    price:  2.55,
  },
  {
    id: 2,
    name: "Bread",
    description: "1 Loaf of Sliced Bread",
    price: 1.76,
  },
  {
    id: 3,
    name: "Juice",
    description: "100% Tropicana Orange Juice",
    price: 0.99,
  },
  {
    id: 4,
    name: "Egg",
    description: "A dozen of Organic Eggs",
    price: 6.18,
  },
]);

const router = express.Router();

// Get all products
router.get("/", (req, res) => {
  res.status(200).json(product.data);
});

// Add items to Cart
router.post("/add-to-cart", (req, res) => {
  if (req.body.id) {
    product.addProductToCart(req.body);
  }

  res.status(200).json({
    items: product.getCartItems(),
    totalPriceWithTax: product.calculateTotalWithTax(),
  });
});

module.exports = router;
