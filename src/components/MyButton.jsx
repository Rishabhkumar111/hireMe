import React, { useState } from "react";


const MyButton = ({ handleClick, text, img}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className=" bg-[#00a5fd] py-3 px-6 rounded-lg shadow-[0px_3px_5px_2px_#0045a9] hover:shadow-lg hover:text-[#00a5fd] hover:bg-[#e4ffff] flex justify-center items-center gap-3 md:text-2xl mx-5 lg:text-2xl sm:text-xl"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // to={to}
    >
      
      {img && React.cloneElement(img, { color: isHovered ? '#00a5fd' : '#e4ffff' })}
      {text}
    </button>
  );
};

export default MyButton;
