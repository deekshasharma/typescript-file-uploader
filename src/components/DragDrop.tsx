import React, { ChangeEvent, useState } from "react";
import upload from "../images/upload.svg";
import styles from "./DragDrop.module.css";

interface DragDropProps {
  onFileSelect: (file: File | undefined) => void;
}

export const DragDrop = ({ onFileSelect }: DragDropProps) => {
  const [highlightDropZone, setHighlightDropZone] = useState<boolean>(false);
  const showFileChooser = () => document.getElementById("fileInput")!.click();

  const onChangeFileChooser = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    onFileSelect(files === null ? undefined : files[0]);
  };

  const preventDefaultBehaviour = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const onDropFile = (event: React.DragEvent<HTMLDivElement>) => {
    preventDefaultBehaviour(event);
    const files: FileList = event.dataTransfer.files;
    onFileSelect(files[0]);
  };

  const onDragEnterAndOver = (event: React.DragEvent<HTMLDivElement>) => {
    preventDefaultBehaviour(event);
    setHighlightDropZone(true);
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    preventDefaultBehaviour(event);
    setHighlightDropZone(false);
  };

  return (
    <div
      className={
        highlightDropZone ? styles.uploaderBgHighlight : styles.uploaderBg
      }
      onClick={showFileChooser}
      onDragEnter={(e) => onDragEnterAndOver(e)}
      onDragLeave={(e) => onDragLeave(e)}
      onDragOver={(e) => onDragEnterAndOver(e)}
      onDrop={(e) => onDropFile(e)}
    >
      <p>Drag and drop your file or click to select</p>
      <div>
        <img src={upload} alt="upload-file" className={styles.uploadImg} />
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
