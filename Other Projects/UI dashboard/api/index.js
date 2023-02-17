import express from "express";
import AWS from "aws-sdk";
import fs from "fs";
import * as dotenv from "dotenv";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

const app = express();
dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.YOUR_ACCESS_KEY_ID,
  secretAccessKey: process.env.YOUR_SECRET_ACCESS_KEY,
});

app.post("/api/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  const isVideo = file.mimetype.includes("video");
  const isJson = file.mimetype.includes("json");

  if (isVideo) {
    const params = {
      Bucket: "YOUR_BUCKET_NAME",
      Key: `videos/${file.originalname}`,
      Body: fs.createReadStream(file.path),
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.log(`Error uploading video '${file.originalname}':`, err);
        res.status(500).send("Error uploading video");
      } else {
        console.log(
          `Video '${file.originalname}' uploaded to S3:`,
          data.Location
        );
        res.status(200).send("Video uploaded to AWS S3");
      }
    });
  } else if (isJson) {
    fs.readFile(file.path, "utf8", (err, data) => {
      if (err) {
        console.log(`Error reading JSON file '${file.originalname}':`, err);
        res.status(500).send("Error reading JSON file");
      } else {
        res.status(200).send(data);
      }
    });
  } else {
    console.log(
      `File type '${file.mimetype}' not supported for '${file.originalname}'`
    );
    res.status(400).send("File type not supported");
  }
});

// Defined a GET route for the /videos endpoint
app.get("/api/videos", (req, res) => {
  const prefix = req.query.prefix || "";

  // Call the S3 ListObjectsV2 API to get a list of objects in the bucket with the given prefix
  s3.listObjectsV2(
    {
      Bucket: "<your-bucket-name>",
      Prefix: prefix,
    },
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        // Map the S3 response to the desired format for the API response
        const videos = data.Contents.map((item) => ({
          key: item.Key,
          size: item.Size,
          link: `https://s3.${AWS.config.region}.amazonaws.com/${data.Name}/${item.Key}`,
        }));

        res.json(videos);
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
