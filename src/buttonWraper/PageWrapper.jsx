import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 h-screen bg-gradient-to-t to-cyan-400 via-cyan-400 (60%) from-blue-400 text-[#e4ffff] tracking-widest"
    >
      {children}
    </div>
  );
};

export default PageWrapper;
