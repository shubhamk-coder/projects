import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Box, Container } from "@mui/material";
import Videos from "../components/Videos";
import { width } from "@mui/system";

function Upload() {
  const [file, setFile] = useState(null);
  const [content, setContent] = useState("");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("/videos")
      .then((res) => {
        setVideos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post("/upload", formData);
      if (response.status === 200 && response.data) {
        setContent(JSON.stringify(response.data));
      }
    } catch (error) {
      console.log("Error uploading file:", error);
    }
  };

  return (
    <>
      <div>
        <h1>Upload JSON or Video file</h1>
        <input
          type="file"
          onChange={handleFileChange}
          accept="application/json, video/*"
        />
        <Button variant="contained" onClick={handleUpload}>
          Upload
        </Button>
      </div>
      <div className="mt-10">
        <Container fixed>
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
            {videos && <Videos videos={videos} />}
            {content && <pre>{content}</pre>}
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Upload;
