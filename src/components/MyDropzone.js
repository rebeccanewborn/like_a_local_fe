import React from "react";
import DropzoneComponent from "react-dropzone-component";
import "react-dropzone-component/styles/filepicker.css";

const MyDropzone = props => {
  const componentConfig = {
    iconFiletypes: [".jpg", ".png", ".gif"],
    showFiletypeIcon: true,
    postUrl: "/"
  };
  const djsConfig = { autoProcessQueue: false };
  const eventHandlers = { addedfile: props.onDrop };
  return (
    <DropzoneComponent
      config={componentConfig}
      eventHandlers={eventHandlers}
      djsConfig={djsConfig}
    />
  );
};

export default MyDropzone;
