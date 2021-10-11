import React from "react";
import { FormControl } from "react-bootstrap";

const MyInput = (props) => {
  return (
    <FormControl
      {...props}
      size="sm"
      className="mb-3 w-50"
      aria-label="Small"
      aria-describedby="inputGroup-sizing-sm"
    />
  );
};

export default MyInput;
