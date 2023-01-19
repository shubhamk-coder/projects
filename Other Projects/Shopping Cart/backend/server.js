import express from "express";
import data from "./data.json" assert { type: "json" };

const app = express();
const port = process.env.PORT || 5000;

app.get("/api/products", (req, res) => {
  res.send(data);
});

app.get("/api/products/handle/:Handle", (req, res) => {
  const product = data.find((x) => x.Handle === req.params.Handle);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.get("/api/products/:Handle", (req, res) => {
  const product = data.find((x) => x.Handle === req.params.Handle);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product Not Found" });
  }
});

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
