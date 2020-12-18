import react, { useState } from "react";
import { DragDrop } from "./DragDrop";
import { FilePreview } from "./FilePreview";

export const FileUploader = () => {
  const [userSelectedFile, setUserSelectedFile] = useState<File | undefined>(
    undefined
  );

  const onFileSelect = (file: File | undefined) => setUserSelectedFile(file);

  return (
    <>
      {userSelectedFile && <FilePreview file={userSelectedFile} />}
      {!userSelectedFile && <DragDrop onFileSelect={onFileSelect} />}
    </>
  );
};
