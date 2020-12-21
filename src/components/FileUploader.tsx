import React, { useState } from "react";
import { DragDropUpload } from "./DragDropUpload";
import { FilePreview } from "./FilePreview";
import { FileUploadStatus } from "./FileUploadStatus";
import uploadImg from "../images/upload.svg";

interface FileUploaderProps {
  dragDropText?: string;
  dragDropImage?: string;
  previewTextLabel?: string;
  showCompressionRate?: boolean;
  compressionTextLabel?: string;
  compressionStartValue?: string;
  compressionEndValue?: string;
  cancelLabel?: string;
  uploadLabel?: string;
  // onCancel?: () => void;
  // onUpload?: () => void;
}

export const FileUploader = ({
  dragDropText,
  dragDropImage,
  previewTextLabel,
  showCompressionRate,
  compressionTextLabel,
  compressionStartValue,
  compressionEndValue,
  cancelLabel,
  uploadLabel,
}: FileUploaderProps) => {
  const [userSelectedFile, setUserSelectedFile] = useState<File | undefined>(
    undefined
  );
  const [compressionRate, setCompressionRate] = useState<number>(0);
  const [confirmFileUpload, setConfirmFileUpload] = useState<boolean>(false);

  const onFileSelect = (file: File | undefined) => setUserSelectedFile(file);
  const onClickCancel = () => {
    setUserSelectedFile(undefined);
    setCompressionRate(0);
  };
  const onClickUpload = () => setConfirmFileUpload(true);
  const onChangeCompressionRate = (rate: number) => setCompressionRate(rate);
  const onClickAnotherFileUpload = () => {
    setUserSelectedFile(undefined);
    setConfirmFileUpload(false);
    setCompressionRate(0);
  };

  return (
    <>
      {userSelectedFile && confirmFileUpload && (
        <FileUploadStatus
          onClickAnotherFileUpload={onClickAnotherFileUpload}
          compressionRate={compressionRate}
        />
      )}
      {userSelectedFile && !confirmFileUpload && (
        <FilePreview
          file={userSelectedFile}
          previewTextLabel={previewTextLabel || "Preview"}
          showCompressionRate={showCompressionRate || true}
          compressionTextLabel={compressionTextLabel || "Compression Rate"}
          compressionStartValue={compressionStartValue || "0"}
          compressionEndValue={compressionEndValue || "100"}
          cancelLabel={cancelLabel || "CANCEL"}
          uploadLabel={uploadLabel || "UPLOAD"}
          compressionRate={compressionRate}
          onChangeCompressionRate={onChangeCompressionRate}
          onCancel={onClickCancel}
          onUpload={onClickUpload}
        />
      )}
      {!userSelectedFile && (
        <DragDropUpload
          onFileSelect={onFileSelect}
          dragDropText={
            dragDropText || "Drag and drop your file or click to select"
          }
          dragDropImage={dragDropImage || uploadImg}
        />
      )}
    </>
  );
};
