import React, { useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

const FileUploader = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (event) => {
    const newFiles = [];
    for (let i = 0; i < event.target.files.length; i++) {
      newFiles.push(event.target.files[i]);
    }
    setFiles(newFiles);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    // Perform the file upload using an HTTP POST request, for example using Axios
    axios
      .post("/server/upload", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" multiple onChange={handleChange} />
      <Button variant="contained" type="submit">
        Upload Files
      </Button>
    </form>
  );
};

export default FileUploader;
