import React, { useState } from "react";

interface FilePreviewProps {
  file: File;
}

export const FilePreview = ({ file }: FilePreviewProps) => {
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
      <CallToAction />
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

const CallToAction = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        border: "0px solid red",
        width: "100%",
      }}
    >
      <button>CANCEL</button>
      <button>UPLOAD</button>
    </div>
  );
};
