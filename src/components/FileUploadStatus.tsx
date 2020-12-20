import React, { useEffect, useState } from "react";
import "./FileUploadStatusStyles.css";
import uploadOk from "../images/upload-ok.svg";

interface FileUploadStatusProps {
  compressionRate: number;
  onClickUploadFile: () => void;
}
export const FileUploadStatus = ({
  compressionRate, // CompressionRate to be sent to backend
  onClickUploadFile,
}: FileUploadStatusProps) => {
  const [uploaded, setUploaded] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (uploaded < 100) {
        setUploaded(uploaded + 5);
      } else clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#C2E5E1",
        width: "50vw",
        height: "50vh",
        justifyContent: "center",
      }}
    >
      {uploaded < 100 && <Uploading uploaded={uploaded} />}
      {uploaded >= 100 && (
        <UploadComplete onClickUploadFile={onClickUploadFile} />
      )}
    </div>
  );
};

interface UploadingProps {
  uploaded: number;
}

const Uploading = ({ uploaded }: UploadingProps) => {
  return (
    <>
      <p style={{ fontWeight: "bold", marginBottom: "5vh", color: "#4C505B" }}>
        UPLOADING
      </p>
      <div>
        <progress max="100" value={uploaded} />
      </div>
    </>
  );
};

interface UploadCompleteProps {
  onClickUploadFile: () => void;
}
const UploadComplete = ({ onClickUploadFile }: UploadCompleteProps) => {
  return (
    <div>
      <p
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          color: "#4C505B",
        }}
      >
        Uploaded
        <span>
          <img
            src={uploadOk}
            alt={"uploaded-ok"}
            style={{
              marginLeft: "1vw",
              height: "5vh",
            }}
          />
        </span>
      </p>
      <div>
        <button
          style={{
            marginTop: "5vh",
            textDecoration: "underline",
            background: "none !important",
            border: "none",
            padding: "0 !important",
            backgroundColor: "transparent",
            fontWeight: "bold",
            color: "#4C505B",
            cursor: "pointer",
          }}
          onClick={onClickUploadFile}
        >
          Upload another file
        </button>
      </div>
    </div>
  );
};
