import React from "react";
import "./UserOutput.css";

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>{props.username}</p>
      <p>
        Paragraph one Paragraph one Paragraph one Paragraph one Paragraph one
      </p>
      <p>
        Paragraph two Paragraph two Paragraph two Paragraph two Paragraph two
      </p>
    </div>
  );
};

export default userOutput;
