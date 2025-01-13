import React from "react";

function ImageWithCaption({ src, caption }) {
  return (
    <div style={{ textAlign: "center" }}>
      {src ? (
        <img
          src={src}
          alt={caption}
          style={{ width: "250px", height: "250px" }}
        />
      ) : (
        <p style={{margin:"20px"}}>Image not available</p>
      )}
      {caption && <p>{caption}</p>}
    </div>
  );
}

export default ImageWithCaption;
