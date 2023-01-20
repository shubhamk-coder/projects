import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routes/productRoutes.js";

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

const app = express();

const port = process.env.PORT || 5000;

app.use("/api/products", productRouter);

app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
