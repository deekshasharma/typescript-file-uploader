import React, { useEffect, useState } from "react";
import "./FileUploadStatusStyles.css";

interface FileUploadStatusProps {
  compressionRate: number;
}
export const FileUploadStatus = ({
  compressionRate,
}: FileUploadStatusProps) => {
  const [uploaded, setUploaded] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (uploaded < 100) {
        setUploaded(uploaded + 6);
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
      <Uploading uploaded={uploaded} />
    </div>
  );
};

interface UploadingProps {
  uploaded: number;
}

const Uploading = ({ uploaded }: UploadingProps) => {
  return (
    <>
      <p style={{ fontWeight: "bold", marginBottom: "5vh" }}>UPLOADING</p>
      <div>
        <progress max="100" value={uploaded}></progress>
      </div>
    </>
  );
};
