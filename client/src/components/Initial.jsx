import React, { useEffect, useState } from "react";
import { backgrounds } from "../data";

const Initial = (props) => {
  const [background, setBackground] = useState();

  useEffect(() => {
    const index = Math.floor(Math.random(3) * 3);
    setBackground(backgrounds[index]);
  }, []);

  return (
    <>
      <div className="w-full h-screen fixed top-0 left-0">
        <div
          className="w-full h-screen object-cover bg-cover"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container w-[1200px] mx-auto h-full flex justify-between items-end gap-10 pb-10">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Initial;
