import React, { useState } from "react";
import styles from "./FilePreviewStyles.module.css";

interface FilePreviewProps {
  file: File;
  previewTextLabel: string;
  showCompressionRate: boolean;
  compressionTextLabel: string;
  compressionStartValue: string;
  compressionEndValue: string;
  compressionRate: number;
  onChangeCompressionRate: (rate: number) => void;
  cancelLabel: string;
  uploadLabel: string;
  onCancel: () => void;
  onUpload: () => void;
}

export const FilePreview = ({
  file,
  previewTextLabel,
  showCompressionRate,
  compressionTextLabel,
  compressionStartValue,
  compressionEndValue,
  cancelLabel,
  uploadLabel,
  compressionRate,
  onChangeCompressionRate,
  onCancel,
  onUpload,
}: FilePreviewProps) => {
  const [fileBlob, setFileBlob] = useState<string>("");

  let fileReader = new FileReader();
  fileReader.onloadend = () => setFileBlob(fileReader.result as string);
  fileReader.readAsDataURL(file);

  return (
    <div className={styles.previewBg}>
      <Preview
        previewTextLabel={previewTextLabel}
        fileBlob={fileBlob}
        fileType={file.type}
      />
      {showCompressionRate && (
        <CompressionRate
          compressionTextLabel={compressionTextLabel}
          compressionStartValue={compressionStartValue}
          compressionEndValue={compressionEndValue}
          compressionRate={compressionRate}
          onChangeCompressionRate={onChangeCompressionRate}
        />
      )}
      <CallToAction
        cancelLabel={cancelLabel}
        uploadLabel={uploadLabel}
        onClickCancel={onCancel}
        onClickUpload={onUpload}
      />
    </div>
  );
};

interface PreviewProps {
  previewTextLabel: string;
  fileBlob: string;
  fileType: string;
}
const Preview = ({ previewTextLabel, fileBlob, fileType }: PreviewProps) => {
  return (
    <div className={styles.preview}>
      <p className={styles.previewText}>{previewTextLabel}</p>
      <div className={styles.previewImg}>
        {fileBlob && (
          <embed src={fileBlob} type={fileType} className={styles.previewImg} />
        )}
      </div>
    </div>
  );
};

interface CompressionRateProps {
  compressionTextLabel: string;
  compressionStartValue: string;
  compressionEndValue: string;
  compressionRate: number;
  onChangeCompressionRate: (rate: number) => void;
}

const CompressionRate = ({
  compressionTextLabel,
  compressionStartValue,
  compressionEndValue,
  compressionRate,
  onChangeCompressionRate,
}: CompressionRateProps) => {
  return (
    <div>
      <p className={styles.previewText}>{compressionTextLabel}</p>
      <div className={styles.compressionSlider}>
        <input
          type="range"
          min={compressionStartValue}
          max={compressionEndValue}
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
  cancelLabel: string;
  uploadLabel: string;
  onClickCancel: () => void;
  onClickUpload: () => void;
}

const CallToAction = ({
  cancelLabel,
  uploadLabel,
  onClickCancel,
  onClickUpload,
}: CallToActionProps) => {
  return (
    <div className={styles.ctaBg}>
      <button onClick={onClickCancel} className={styles.cancel}>
        {cancelLabel}
      </button>
      <button onClick={onClickUpload} className={styles.upload}>
        {uploadLabel}
      </button>
    </div>
  );
};
