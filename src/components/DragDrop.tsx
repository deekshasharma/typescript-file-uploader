import React from "react";
import upload from "../images/upload.svg";

export const DragDrop = () => {
  const showFileChooser = () => {
    document.getElementById("fileInput")!.click();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "0px solid red",
        height: "50vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C2E5E1",
        width: "50vw",
        cursor: "pointer",
      }}
      onClick={showFileChooser}
    >
      <p>Drag and drop your file or click to select</p>
      <div>
        <img src={upload} alt="upload-file" style={{ height: "10vh" }} />
        <input
          id="fileInput"
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={() => console.log("hey")}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};
