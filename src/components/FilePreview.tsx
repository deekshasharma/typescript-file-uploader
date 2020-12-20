import React, { useState } from "react";
import "./FilePreviewStyles.css";

interface FilePreviewProps {
  file: File;
  compressionRate: number;
  onChangeCompressionRate: (rate: number) => void;
  onClickCancel: () => void;
  onClickUpload: () => void;
}

export const FilePreview = ({
  file,
  compressionRate,
  onChangeCompressionRate,
  onClickCancel,
  onClickUpload,
}: FilePreviewProps) => {
  const [fileBlob, setFileBlob] = useState<string>("");

  let fileReader = new FileReader();
  fileReader.onloadend = () => setFileBlob(fileReader.result as string);
  fileReader.readAsDataURL(file);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#C2E5E1",
        width: "50vw",
      }}
    >
      <Preview fileBlob={fileBlob} fileType={file.type} />
      <CompressionRate
        compressionRate={compressionRate}
        onChangeCompressionRate={onChangeCompressionRate}
      />
      <CallToAction
        onClickCancel={onClickCancel}
        onClickUpload={onClickUpload}
      />
    </div>
  );
};

interface PreviewProps {
  fileBlob: string;
  fileType: string;
}
const Preview = ({ fileBlob, fileType }: PreviewProps) => {
  return (
    <div style={{ margin: "25px 0" }}>
      <p style={{ fontWeight: "bold", marginBottom: "5vh", color: "#4C505B" }}>
        Preview
      </p>
      <div style={{ height: "30vh" }}>
        {fileBlob && (
          <embed src={fileBlob} type={fileType} style={{ height: "30vh" }} />
        )}
      </div>
    </div>
  );
};

interface CompressionRateProps {
  compressionRate: number;
  onChangeCompressionRate: (rate: number) => void;
}

const CompressionRate = ({
  compressionRate,
  onChangeCompressionRate,
}: CompressionRateProps) => {
  return (
    <div>
      <p style={{ fontWeight: "bold", marginBottom: "5vh", color: "#4C505B" }}>
        Compression Rate
      </p>
      <div className="compressionSlider">
        <input
          type="range"
          min="0"
          max="100"
          value={compressionRate}
          className="slider"
          onChange={(e) => onChangeCompressionRate(parseInt(e.target.value))}
        />
        <p>
          <span style={{ fontWeight: "bold", color: "#4C505B" }}>
            {compressionRate}%
          </span>
        </p>
      </div>
    </div>
  );
};

interface CallToActionProps {
  onClickCancel: () => void;
  onClickUpload: () => void;
}

const CallToAction = ({ onClickCancel, onClickUpload }: CallToActionProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
        margin: "25px 0",
      }}
    >
      <button
        style={{
          display: "inline-block",
          borderRadius: "22px",
          padding: "0.8rem 0",
          margin: "0.5rem 1rem",
          width: "9rem",
          border: "1px solid black",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={onClickCancel}
      >
        CANCEL
      </button>
      <button
        style={{
          display: "inline-block",
          borderRadius: "22px",
          padding: "0.8rem 0",
          margin: "0.5rem 1rem",
          width: "9rem",
          backgroundColor: "#FACBCF",
          border: "0.5px solid #FACBCF",
          cursor: "pointer",
          fontWeight: "bold",
        }}
        onClick={onClickUpload}
      >
        UPLOAD
      </button>
    </div>
  );
};
