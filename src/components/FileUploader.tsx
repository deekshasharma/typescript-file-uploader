import react, { useState } from "react";
import { DragDrop } from "./DragDrop";
import { FilePreview } from "./FilePreview";

export const FileUploader = () => {
  const [userSelectedFile, setUserSelectedFile] = useState<File | undefined>(
    undefined
  );

  const onFileSelect = (file: File | undefined) => setUserSelectedFile(file);
  const onClickCancel = () => setUserSelectedFile(undefined);
  const onClickUpload = () => console.log("Upload clicked");

  return (
    <>
      {userSelectedFile && (
        <FilePreview
          file={userSelectedFile}
          onClickCancel={onClickCancel}
          onClickUpload={onClickUpload}
        />
      )}
      {!userSelectedFile && <DragDrop onFileSelect={onFileSelect} />}
    </>
  );
};
