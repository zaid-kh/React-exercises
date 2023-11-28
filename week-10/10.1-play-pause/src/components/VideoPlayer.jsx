import React, { useRef } from "react";

export const VideoPlayer = () => {
  const videoRef = useRef();

  function handlePlay() {
    videoRef.current.play();
  }
  function handlePause() {
    videoRef.current.pause();
  }
  return (
    <div>
      {/* <!-- 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org --> */}
      <video
        src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        autoPlay
        ref={videoRef}
      ></video>
      <div>
        <button onClick={handlePlay}>▶</button>
        <button onClick={handlePause}>⏸️</button>
      </div>
    </div>
  );
};
