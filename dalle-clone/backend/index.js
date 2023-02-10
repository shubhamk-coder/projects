import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import path from "path";

import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/dist/index.html"))
);

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E!");
});

const port = process.env.PORT || 8080;
const startServer = async (req, res) => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(port, () =>
      console.log(`Server has started on port http://localhost:${port}`)
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
