import React from "react";

function ButtonWrapper({ children }) {
  return (
    <div className="flex justify-center items-center lg:gap-x-14 md:gap-x-8">
      {children}
    </div>
  );
}

export default ButtonWrapper;
