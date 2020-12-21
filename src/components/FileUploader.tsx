import React, { useState } from "react";
import { DragDropUpload } from "./DragDropUpload";
import { FilePreview } from "./FilePreview";
import { FileUploadStatus } from "./FileUploadStatus";
import uploadImg from "../images/upload.svg";

interface FileUploaderProps {
  dragDropText?: string;
  dragDropImage?: string;
}

export const FileUploader = ({
  dragDropText,
  dragDropImage,
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
          compressionRate={compressionRate}
          onChangeCompressionRate={onChangeCompressionRate}
          onClickCancel={onClickCancel}
          onClickUpload={onClickUpload}
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
