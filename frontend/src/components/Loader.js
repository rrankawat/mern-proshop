import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "75px",
          height: "75px",
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
