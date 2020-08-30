import React from "react";

function counterControl(props) {
  return (
    <div className="col-md-auto">
      <button
        className="btn btn-outline-dark"
        onClick={() => props.onClicked()}
      >
        {props.label}
      </button>
    </div>
  );
}

export default counterControl;
