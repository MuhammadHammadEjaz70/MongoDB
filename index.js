console.clear();
const express = require("express");
const app = express();
app.use(express.json()); // middleware
// Express is basically a  function
const mongoose = require("mongoose");
const {
  createProduct,
  getAllProducts,
  deleteProducts,
  updateProduct,
} = require("./productsOperations");
// Connection Creation
mongoose
  .connect("mongodb://localhost/mernstack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connection to MongoDB created");
    // let product = await createProduct("HP", 21900, ["black", "spider"]);
    // console.log(product);
    // let AllProducts = await getAllProducts();
    // console.log(AllProducts);
    // console.log(await deleteProducts("61c097cf45badade7a13a52d"));
    let updatedProduct = updateProduct(
      "61c097e4da1d1d6b01346123",
      "Lenovo Update",
      900,
      []
    );
  })
  .catch((err) => {
    console.log("Erro connecting");
    console.log(err);
  });
app.listen(3000);
