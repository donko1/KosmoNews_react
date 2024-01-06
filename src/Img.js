import React from "react";

function CroppedImage({ src, width, height }) {
  return (
    <div style={{ width: width, height: height, overflow: "hidden" }}>
      {/* <img src={`/media/${src}`} style={{ width: "100%", height: "auto" }} /> */}
      <img
        src={`http://localhost:8000/media/${src}`}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export default CroppedImage;
