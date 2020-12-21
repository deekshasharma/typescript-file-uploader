import React, { useEffect, useState } from "react";
import styles from "./FileUploadStatusStyles.module.css";
import uploadOk from "../images/upload-ok.svg";

interface FileUploadStatusProps {
  compressionRate: number;
  onClickAnotherFileUpload: () => void;
}
export const FileUploadStatus = ({
  compressionRate, // CompressionRate to be sent to backend
  onClickAnotherFileUpload,
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
    <div className={styles.uploadStatusBg}>
      {uploaded < 100 && <Uploading uploaded={uploaded} />}
      {uploaded >= 100 && (
        <UploadComplete onClickAnotherFileUpload={onClickAnotherFileUpload} />
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
      <p className={styles.uploadingText}>UPLOADING</p>
      <div>
        <progress max="100" value={uploaded} className={styles.progressBar} />
      </div>
    </>
  );
};

interface UploadCompleteProps {
  onClickAnotherFileUpload: () => void;
}
const UploadComplete = ({ onClickAnotherFileUpload }: UploadCompleteProps) => {
  return (
    <>
      <p className={styles.uploadedContainer}>
        Uploaded
        <span>
          <img
            src={uploadOk}
            alt={"uploaded-ok"}
            className={styles.uploadSvg}
          />
        </span>
      </p>
      <div>
        <button
          onClick={onClickAnotherFileUpload}
          className={styles.anotherFileLink}
        >
          Upload another file
        </button>
      </div>
    </>
  );
};
