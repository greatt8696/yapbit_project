import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Modal = () => {
  const dispatch = useDispatch();
  const modalDetails = useSelector((state) => state.uiReducer.modalDetails);

  useEffect(() => {
    console.log(modalDetails);
  }, [modalDetails]);

  const exitHandler = () => dispatch({ type: "OFF_MODAL" });

  const okHandler = () => {
    const { type, payload } = modalDetails.callbackDispatch;
    console.log({ type: type, payload: JSON.parse(payload) });
    dispatch({ type: type, payload: JSON.parse(payload) });
  };

  return (
    <div
      onClick={exitHandler}
      className="absolute top-0 w-screen h-screen bg-black/75 z-50 backdrop-blur-sm"
    >
      <div className="absolute grid grid-rows-5 w-1/4 h-1/4 p-4 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200/40 rounded-3xl mx-auto backdrop-blur-sm">
        <h1 className="text-xl row-span-1">{modalDetails.data.title}</h1>
        <p className="row-span-2">{modalDetails.data.content}</p>
        <div className="grid grid-cols-2 gap-1 ">
          <button
            onClick={okHandler}
            className="col-span-1 rounded-md py-1 border-2 font-bold  border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition-all hover:animate-wiggle"
          >
            녜
          </button>
          <button
            onClick={exitHandler}
            className="col-span-1 rounded-md py-1 border-2 font-bold  border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition-all hover:animate-wiggle"
          >
            아니요
          </button>
          <button
            onClick={exitHandler}
            className="col-span-2 rounded-md py-1 border-2 font-bold  border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition-all hover:animate-wiggle"
          >
            알겠어요
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
