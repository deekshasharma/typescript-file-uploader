const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.post("/upload", (req, res) => {
  try {
    if (!req.files) res.status(400).send({ message: "File missing" });
    else {
      const file = req.files.upload;
      const fileName = file.name;
      file.mv("./db/" + fileName).then((result) => {
        res.status(200).send({
          message: "File uploaded successfully",
          data: { name: fileName, mimeType: file.mimetype },
        });
      });
    }
  } catch (err) {
    res.status(500).send({ message: "Failed to upload file " + err.message });
  }
});
