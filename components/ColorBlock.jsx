import React from "react";

function ColorBlock(props) {
  const backgroundColor = props.colors || "gray";

  const blockStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: backgroundColor,
    margin: "10px",
    display: "inline",
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    
    
  };

  return (
    <div style={containerStyle}>
      <div style={blockStyle}></div>
    </div>
  );
}

export default ColorBlock;
