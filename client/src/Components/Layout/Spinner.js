import React from 'react';
import spinner from "./spinner2.gif"

const Spinner = () => {
  return (
    <>
      <img
        src={spinner}
        alt="Loading"
        style={{ margin: "auto" }}
      />
    </>
  )
}

export default Spinner;
