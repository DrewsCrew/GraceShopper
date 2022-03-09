const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("Product", {
  name: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: "A nice piece of clothing!",
  },
  price: { type: Sequelize.INTEGER, defaultValue: 20 },
  gender: { type: Sequelize.STRING, defaultValue: "Male" },
  size: { type: Sequelize.STRING, defaultValue: "Medium" },
  category: { type: Sequelize.STRING, defaultValue: "Shirt" },
  stock: { type: Sequelize.INTEGER, defaultValue: 1 },
  imageUrl: { type: Sequelize.STRING, defaultValue: "png" },
  quantity: { type: Sequelize.INTEGER, defaultValue: 1 },
});

module.exports = Product;
