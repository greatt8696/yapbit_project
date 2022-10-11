import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddPost = ({ setOnAdd, onAdd }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const loginUser = useSelector((state) => state.loginReducer.loginUser);
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    writer: "",
    like: "0",
    view: "0",
  });
  useEffect(() => {
    setInputs({ ...inputs, writer: loginUser.name });
  }, []);
  useEffect(() => {
    setInputs({ ...inputs, writer: loginUser.name });
  }, [loginUser]);

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const editHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_POST", payload: inputs });
    setOnAdd(false);
  };

  const [isEnter, setEnter] = useState(false);

  const enterHandler = () => setEnter(true);
  const leaveHandler = () => setEnter(false);

  const exitHandler = () => {
    if (!isEnter) setOnAdd(false);
  };

  return (
    <div
      onClick={exitHandler}
      className="fixed top-0 left-0 w-full h-full bg-slate-900/5 flex"
    >
      <div
        className="mx-auto mt-12 z-50"
        onMouseEnter={enterHandler}
        onMouseLeave={leaveHandler}
      >
        <div className="w-[800px] h-[800px] bg-white/25 rounded-2xl p-5 flex flex-col gap-5">
          <div className="flex justify-between">
            <label className="text-4xl">제목</label>
          </div>
          <input
            onChange={inputsHandler}
            value={inputs.title}
            name="title"
            className="px-4 h-14 text-3xl text-black rounded-2xl"
          ></input>
          <label className="text-2xl">작성자</label>
          <input
            readOnly
            onChange={inputsHandler}
            value={inputs.writer}
            name="writer"
            className="px-4 h-10 text-3xl text-black rounded-2xl"
          ></input>
          <label className="text-2xl">내용</label>
          <input
            onChange={inputsHandler}
            value={inputs.content}
            name="content"
            className="px-4 h-96 text-1xl text-black rounded-2xl"
          ></input>
          <div className="h-15 grid grid-cols-2">
            <button
              onClick={editHandler}
              className="col-span-2 p-1 py-3 px-6 font-bold bg-green-600 mx-2 rounded-lg hover:bg-green-500 hover:border-1 hover:border-green-600"
            >
              작성
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
