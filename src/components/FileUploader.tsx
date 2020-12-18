import react, { useState } from "react";
import { DragDrop } from "./DragDrop";

export const FileUploader = () => {
  const [userSelectedFile, setUserSelectedFile] = useState<File | undefined>(
    undefined
  );

  console.log(userSelectedFile);

  const onFileSelect = (file: File | undefined) => setUserSelectedFile(file);
  return <DragDrop onFileSelect={onFileSelect} />;
};
