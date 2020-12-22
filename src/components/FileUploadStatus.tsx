import React, { useEffect, useState } from "react";
import styles from "./FileUploadStatusStyles.module.css";

interface FileUploadStatusProps {
  compressionRate: number;
  onClickAnotherFileUpload: () => void;
  uploadingLabel: string;
  uploadedLabel: string;
  uploadedIcon: string; //start
  showAnotherFileUploadLink: boolean;
  anotherFileUploadLabel: string;
}
export const FileUploadStatus = ({
  compressionRate, // CompressionRate to be sent to backend
  onClickAnotherFileUpload,
  uploadingLabel,
  uploadedLabel,
  uploadedIcon,
  showAnotherFileUploadLink,
  anotherFileUploadLabel,
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
      {uploaded < 100 && (
        <Uploading uploadingLabel={uploadingLabel} uploaded={uploaded} />
      )}
      {uploaded >= 100 && (
        <UploadComplete
          uploadedIcon={uploadedIcon}
          uploadedLabel={uploadedLabel}
          showAnotherFileUploadLink={showAnotherFileUploadLink}
          anotherFileUploadLabel={anotherFileUploadLabel}
          onClickAnotherFileUpload={onClickAnotherFileUpload}
        />
      )}
    </div>
  );
};

interface UploadingProps {
  uploadingLabel: string;
  uploaded: number;
}

const Uploading = ({ uploadingLabel, uploaded }: UploadingProps) => {
  return (
    <>
      <p className={styles.uploadingText}>{uploadingLabel}</p>
      <div>
        <progress max="100" value={uploaded} className={styles.progressBar} />
      </div>
    </>
  );
};

interface UploadCompleteProps {
  uploadedIcon: string;
  uploadedLabel: string;
  onClickAnotherFileUpload: () => void;
  showAnotherFileUploadLink: boolean;
  anotherFileUploadLabel: string;
}
const UploadComplete = ({
  uploadedIcon,
  uploadedLabel,
  onClickAnotherFileUpload,
  showAnotherFileUploadLink,
  anotherFileUploadLabel,
}: UploadCompleteProps) => {
  return (
    <>
      <p className={styles.uploadedContainer}>
        {uploadedLabel}
        <span>
          <img
            src={uploadedIcon}
            alt={"uploaded-ok"}
            className={styles.uploadSvg}
          />
        </span>
      </p>
      {showAnotherFileUploadLink && (
        <div>
          <button
            onClick={onClickAnotherFileUpload}
            className={styles.anotherFileLink}
          >
            {anotherFileUploadLabel}
          </button>
        </div>
      )}
    </>
  );
};
