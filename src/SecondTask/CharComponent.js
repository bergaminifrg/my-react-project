import React from "react";

export const charComponent = props => {
  return (
    <div style={style} onClick={props.click}>
      {props.letter}
    </div>
  );
};

export default charComponent;

const style = {
  display: "inline-block",
  padding: "16px",
  textAlign: "center",
  margin: "16px",
  border: "1px solid black"
};
