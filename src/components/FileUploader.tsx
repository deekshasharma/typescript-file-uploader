import React, { useState } from "react";
import { DragDropUpload } from "./DragDropUpload";
import { FilePreview } from "./FilePreview";
import { FileUploadStatus } from "./FileUploadStatus";

export const FileUploader = () => {
  const [userSelectedFile, setUserSelectedFile] = useState<File | undefined>(
    undefined
  );
  const [compressionRate, setCompressionRate] = useState<number>(0);
  const [confirmFileUpload, setConfirmFileUpload] = useState<boolean>(false);

  const onFileSelect = (file: File | undefined) => setUserSelectedFile(file);
  const onClickCancel = () => setUserSelectedFile(undefined);
  const onClickUpload = () => setConfirmFileUpload(true);
  const onChangeCompressionRate = (rate: number) => setCompressionRate(rate);
  const onClickUploadFile = () => {
    setUserSelectedFile(undefined);
    setConfirmFileUpload(false);
  };

  return (
    <>
      {userSelectedFile && confirmFileUpload && (
        <FileUploadStatus
          onClickUploadFile={onClickUploadFile}
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
      {!userSelectedFile && <DragDropUpload onFileSelect={onFileSelect} />}
    </>
  );
};
