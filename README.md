# Steps to Run the Project

To run this project locally, clone this project onto your machine and run the following commands in the project directory using command line.
```
yarn install
yarn start
``` 
To run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Deployed Build
Visit this link [http://ts-file-uploader.surge.sh/](http://ts-file-uploader.surge.sh/)

# What is a FileUploader?
`<FileUploader/>` is a reusable and customizable file upload and drop zone component API. The implementation for this component is written using `TypeScript` in `React`.

Below are the optional props that can be passed to the component.

```typescript
interface FileUploaderProps {
  dragDropText?: string;
  dragDropImage?: string;
  previewTextLabel?: string;
  showCompressionRate?: boolean;
  compressionTextLabel?: string;
  compressionStartValue?: string;
  compressionEndValue?: string;
  cancelLabel?: string;
  uploadLabel?: string;
  onCancel?: () => void;
  onUpload?: () => Promise<{}>;
  uploadingLabel?: string;
  uploadedLabel?: string;
  uploadedIcon?: string;
  showAnotherFileUploadLink?: boolean;
  anotherFileUploadLabel?: string;
}
```

| Prop Name  | Type  |Default Value   | Description   |
|---    |---    |---       |-------------|
|`dragDropText`|`string`|Drag and drop your file or click to select|Custom text to display as an indication for users to either upload or drag and drop a file.
|`dragDropImage`|`string`|Default upload svg file|If passed, this custom svg file will be displayed for upload or drag image.
|`previewTextLabel`|`string`|Preview|If passed, this custom text will be displayed to preview image.
|`showCompressionRate`|`boolean`| true | If `true`, the compression rate slider will be visible. 
|`compressionTextLabel`|`string`| Compression Rate | If passed, this custom text will convey users to select the compression rate for the file.
|`compressionStartValue`|`string`|0| If passed, the compression slider will start from that value.
|`compressionEndValue`|`string`|100| If passed, this will be the max value of the compression slider
|`cancelLabel`|`string`| CANCEL | If passed, will override the default label for the cancel button.
|`uploadLabel`|`string`| UPLOAD | If passed, will override the default label for the upload button.
|`onCancel`|`fun`| Default behaviour will navigate the user back to the upload page | If passed, this function will be executed in addition to the default behaviour.
|`onUpload`|`fun`| Default behaviour shows a progress bar for few seconds.| If passed, currently this function will be disregarded.
|`uploadingLabel`|`string`| Uploading | If passed, will override the default message to indicate the user that file is uploading.
|`uploadedLabel`|`string`|File upload complete | If passed, will override the default message to inform user that upload is complete.
|`uploadedIcon`|`string`|Default svg with a checkmark | If passed, will override the default svg to be rendered next to the uploaded text.
|`showAnotherFileUploadLink`|`boolean`|true| If true, a link to upload another file will be displayed.
|`anotherFileUploadLabel`|`string`|Upload another file | If passed, will override the default text to upload another file.


# Scope
- Currently, the uploader accepts only one file for the upload.
- Although, any file could be uploaded, the file preview is available for images, videos and pdf files.
- The file is not persisted in a database. The purpose of the uploading progress bar is to indicate that file is being uploaded.
- The uploader preview supports files that have 16:9 and 1:1 ratio. 

# Limitations
- `onUpload()` function in the API if passed is not utilized currently. However, with a simple refactor to the
  `<FileUploader>` and `<FileUploadStatus>` component, we can override the default implementation. This will be particularly helpful when persisting the data into a DB.
- This project does not include any third-party dependencies other than those that come with Create React App. Currently, it does not allow the user is not able to update color and styles. However, with styling libraries with CSS in JS support such as [Styled Components](https://styled-components.com/), we can extend the API to customize color and theme. Libraries such as Material Design [Material-UI](https://material-ui.com/) also allow custom theming and can also be used.
