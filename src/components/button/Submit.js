// react libraries
import React from "react";

// styles
import "./_btn.scss";

// button component
const Submit = ({ onClick }) => {
  return (
    <button onClick={onClick} className="submit-btn">
      Submit
    </button>
  );
};

export default Submit;
