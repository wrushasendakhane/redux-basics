import React from "react";

function counterOutput(props) {
  return (
    <div className="text-center">
      <div className="alert alert-warning">
        Current Counter: {props.counter}
      </div>
    </div>
  );
}
export default counterOutput;
