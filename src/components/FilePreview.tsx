import React, { useState } from "react";
import styles from "./FilePreviewStyles.module.css";

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
    <div className={styles.previewBg}>
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
    <div className={styles.preview}>
      <p className={styles.previewText}>Preview</p>
      <div className={styles.previewImg}>
        {fileBlob && (
          <embed src={fileBlob} type={fileType} className={styles.previewImg} />
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
      <p className={styles.previewText}>Compression Rate</p>
      <div className={styles.compressionSlider}>
        <input
          type="range"
          min="0"
          max="100"
          value={compressionRate}
          className={styles.slider}
          onChange={(e) => onChangeCompressionRate(parseInt(e.target.value))}
        />
        <p className={styles.compressionRate}>{compressionRate}%</p>
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
    <div className={styles.ctaBg}>
      <button onClick={onClickCancel} className={styles.cancel}>
        CANCEL
      </button>
      <button onClick={onClickUpload} className={styles.upload}>
        UPLOAD
      </button>
    </div>
  );
};
