const express = require("express");
const app = express();
app.use(express.json()); // middleware

// Express is basically an function

const products = ["Laptop", "LCD", "Table", "Shirt", "Ball"];
app.get("/", function (req, res) {
  res.send("Hello World");
});

/*First parameter is url 
Second is a function with 2 input
first is request
and second is response */
app.get("/api/products", function (req, res) {
  res.send(products);
});
app.get("/api/products/:index", function (req, res) {
  if (!products[req.params.index])
    return res.status(400).send("Product not found");
  res.send(products[req.params.index]);
});
app.put("/api/products/:index", function (req, res) {
  //   console.log(req.body);
  products[req.params.index] = req.body.name;
  res.send(products[req.params.index]);
});
app.delete("/api/products/:index", function (req, res) {
  products.splice(req.params.index, 1);
  res.send(products);
});
app.post("/api/products", function (req, res) {
  products.push(req.body.name);
  res.send(products);
});

app.listen(3000);
