import React, { ChangeEvent } from "react";
import upload from "../images/upload.svg";

interface DragDropProps {
  onFileSelect: (file: File | undefined) => void;
}

export const DragDrop = ({ onFileSelect }: DragDropProps) => {
  const showFileChooser = () => document.getElementById("fileInput")!.click();
  const onChangeFileChooser = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    onFileSelect(files === null ? undefined : files[0]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
          onChange={(e) => onChangeFileChooser(e)}
          style={{ display: "none" }}
        />
      </div>
    </div>
  );
};
