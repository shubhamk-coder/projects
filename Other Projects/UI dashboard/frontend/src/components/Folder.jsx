import React, { useRef, useState } from "react";
import S3 from "react-aws-s3";
import { Button, Container } from "@mui/material";

function Upload() {
  const fileInput = useRef();
  const [fileData, setFileData] = useState(null);

  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    dirName: process.env.REACT_APP_DIR_NAME /* optional */,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS_ID,
    secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
  };

  const handleClick = (event) => {
    event.preventDefault();
    let newArr = [];
    newArr.push(fileInput.current.files);
    newArr.forEach((file) => handleUpload(file));
  };

  const handleUpload = (file) => {
    if (file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (file) => {
        setFileData(JSON.parse(file));
      };
      reader.readAsText(file);
    } else if (file.type.startsWith("video/")) {
      let newFileName = file.name.replace(/\..+$/, "");
      const ReactS3Client = new S3(config);
      ReactS3Client.uploadFile(file, newFileName).then((data) => {
        if (data.status === 204) {
          console.log("success");
        } else {
          console.log("fail");
        }
      });
    } else {
      alert("The selected file is not a JSON file or a video file.");
    }
  };

  return (
    <>
      <Container fixed>
        <form className="upload-steps" onSubmit={handleClick}>
          <label>
            Upload file:
            <input
              type="file"
              accept="video/*, .json"
              multiple
              ref={fileInput}
            />
          </label>
          <br />

          <Button variant="contained" type="submit">
            Upload
          </Button>
          {fileData && <pre>{JSON.stringify(fileData, null, 2)}</pre>}
        </form>
      </Container>
    </>
  );
}
export default Upload;
