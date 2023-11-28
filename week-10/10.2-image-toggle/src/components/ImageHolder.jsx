import React from "react";
import { useRef } from "react";
import flower from "../assets/flower.jpeg";
import flowerBw from "../assets/flower-bw.jpeg";

export const ImageHolder = () => {
  const imgRef = useRef(flower);
  function handleHoverIn(e) {
    imgRef.current.src = flowerBw;
  }
  function handleHoverOut(e) {
    imgRef.current.src = flower;
  }
  return (
    <div>
      <img
        src={flower}
        ref={imgRef}
        onMouseEnter={handleHoverIn}
        onMouseOut={handleHoverOut}
        style={{ width: 500 }}
      />
    </div>
  );
};
