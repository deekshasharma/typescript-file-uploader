import React, { useState } from "react";

interface FilePreviewProps {
  file: File;
  onClickCancel: () => void;
  onClickUpload: () => void;
}

export const FilePreview = ({
  file,
  onClickCancel,
  onClickUpload,
}: FilePreviewProps) => {
  const [fileBlob, setFileBlob] = useState<string>("");

  let fileReader = new FileReader();
  fileReader.onloadend = () => setFileBlob(fileReader.result as string);
  fileReader.readAsDataURL(file);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "50vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C2E5E1",
        width: "50vw",
      }}
    >
      <Preview fileBlob={fileBlob} />
      <CompressionRate />
      <CallToAction
        onClickCancel={onClickCancel}
        onClickUpload={onClickUpload}
      />
    </div>
  );
};

interface PreviewProps {
  fileBlob: string;
}
const Preview = ({ fileBlob }: PreviewProps) => {
  return (
    <>
      <p>Preview</p>
      <div style={{ height: "20vh" }}>
        {fileBlob && (
          <img src={fileBlob} alt="upload-file" style={{ height: "20vh" }} />
        )}
      </div>
    </>
  );
};

const CompressionRate = () => {
  return (
    <>
      <p>Compression Rate</p>
      <div>Slider</div>
    </>
  );
};

interface CallToActionProps {
  onClickCancel: () => void;
  onClickUpload: () => void;
}

const CallToAction = ({ onClickCancel, onClickUpload }: CallToActionProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <button onClick={onClickCancel}>CANCEL</button>
      <button onClick={onClickUpload}>UPLOAD</button>
    </div>
  );
};
