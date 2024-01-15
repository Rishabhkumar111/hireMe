import React, { useRef, useState } from "react";

const RunningButton = ({ text, val }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  let count = useRef(0);

  const handleMouseMove = () => {
    let newX =
      val.width +
      30 +
      Math.random() * (window.innerWidth - (2 * val.width + 30)) -
      val.x;
    let newY =
      val.height +
      20 +
      Math.random() * (window.innerHeight - (2 * val.height + 20)) -
      val.y;
    setPosition({
      x: newX,
      y: newY,
    });
    count.current++;
  };

  return (
    <div
      className={`transition-transform transform justify-center items-center p-5 flex md:text-2xl mx-5 lg:text-2xl sm:text-xl ${
        count.current >= 100 ? " hidden" : ""
      }`}
      id="runningButton"
      onMouseMove={handleMouseMove}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <button
        className=" bg-[#00a5fd] py-3 px-6 rounded-lg shadow-[0px_3px_5px_2px_#0045a9] hover:shadow-lg"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {text}
      </button>
    </div>
  );
};

export default RunningButton;
