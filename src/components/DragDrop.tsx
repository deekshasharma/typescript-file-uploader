import React from "react";
import upload from "../images/upload.svg";

export const DragDrop = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "0px solid red",
        height: "50vh",
        alignItems: "center",
        backgroundColor: "#C2E5E1",
        width: "50vw",
      }}
    >
      <h4>Drag and drop your file or click to select</h4>
      <div>
        <img src={upload} alt="upload-file" style={{ height: "10vh" }} />
      </div>
    </div>
  );
};
