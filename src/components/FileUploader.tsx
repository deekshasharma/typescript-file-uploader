import react, { useState } from "react";
import { DragDrop } from "./DragDrop";
import { FilePreview } from "./FilePreview";

export const FileUploader = () => {
  const [userSelectedFile, setUserSelectedFile] = useState<File | undefined>(
    undefined
  );
  const [compressionRate, setCompressionRate] = useState<number>(0);

  const onFileSelect = (file: File | undefined) => setUserSelectedFile(file);
  const onClickCancel = () => setUserSelectedFile(undefined);
  const onClickUpload = () => console.log("Upload clicked");
  const onChangeCompressionRate = (rate: number) => setCompressionRate(rate);

  return (
    <>
      {userSelectedFile && (
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
