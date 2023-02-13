import React, { useState } from "react";

const UploadJSON = () => {
  const [fileData, setFileData] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (e) => {
      setFileData(JSON.parse(e.target.result));
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept="video/*, .json" onChange={handleFileUpload} />
      {fileData && <pre>{JSON.stringify(fileData, null, 2)}</pre>}
    </div>
  );
};

export default UploadJSON;
