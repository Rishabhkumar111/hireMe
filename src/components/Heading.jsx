import React from "react";

const Heading = ({ text }) => {
  return (
    <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold mx-3">
      {text}
    </h1>
  );
};

export default Heading;
