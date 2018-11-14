import React from "react";

const validationComponent = props => {
  return <p>{props.textLength >= 5 ? "Text long enough" : "Text too short"}</p>;
};

export default validationComponent;
