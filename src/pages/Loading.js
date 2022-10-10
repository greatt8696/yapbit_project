import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getImage } from "../assets";

const Loading = () => {
  const loadingRef = useRef();
  const dispatch = useDispatch();

  setTimeout(() => {
    loadingRef.current.classList.add("opacity-0");
    setTimeout(() => {
      dispatch({ type: "OFF_LOADING" });
    }, 500);
  }, 2000);

  return (
    <div
      ref={loadingRef}
      className="absolute top-0 w-screen h-screen bg-black/75 z-50 backdrop-blur-sm transition-opacity"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <img
          className=" inline hover:scale-105 transition-all max-w-60 w-60 h-60 rounded-full  z-30  blur-[1px] animate-bounce "
          src={getImage()}
        />
        <p className="mx-auto inline mt-5 text-2xl animate-wiggle">
          로딩중 이랍니다.
        </p>
      </div>
    </div>
  );
};

export default Loading;
