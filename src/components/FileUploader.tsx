import react, { useState } from "react";
import { DragDrop } from "./DragDrop";
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

  return (
    <>
      {userSelectedFile && confirmFileUpload && (
        <FileUploadStatus compressionRate={compressionRate} />
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
      {!userSelectedFile && <DragDrop onFileSelect={onFileSelect} />}
    </>
  );
};
