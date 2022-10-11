import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PostDetails = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const postDetail = useSelector((state) => state.postReducer.postDetail);

  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    writer: "",
    id: "0",
    like: "0",
    view: "0",
  });

  useEffect(() => {
    setInputs({ ...inputs });
  }, [postDetail]);

  useEffect(() => {
    setInputs({ ...postDetail });
  }, []);

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const editHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT_POST", payload: inputs });
    nav("/postBoard");
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "DELETE_POST", payload: inputs });
    nav("/postBoard");
  };

  const goToBack = () => nav(-1);

  return (
    <div onClick={goToBack} className="w-full h-full bg-slate-900 flex">
      <div className="mx-auto mt-12">
        <div className="w-[800px] h-[800px] bg-white/25 rounded-2xl p-5 flex flex-col gap-5">
          <div className="flex justify-between ">
            <label className="text-2xl mx-1">ID</label>
            <input
              onChange={inputsHandler}
              value={inputs.id}
              readOnly
              name="id"
              className=" h-14 text-3xl bg-transparent w-16 text-white rounded-2xl"
            ></input>
            <label className="text-2xl mx-1">죠아요</label>
            <input
              onChange={inputsHandler}
              value={inputs.like}
              readOnly
              name="like"
              className=" h-14 text-3xl bg-transparent w-16 text-white rounded-2xl"
            ></input>
            <label className="text-2xl mx-1">조회수</label>
            <input
              onChange={inputsHandler}
              value={inputs.view}
              readOnly
              name="view"
              className="h-14 text-3xl bg-transparent w-16 text-white rounded-2xl"
            ></input>
          </div>
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
              className="p-1 py-3 px-6 font-bold bg-green-600 mx-2 rounded-lg hover:bg-green-500 hover:border-1 hover:border-green-600"
            >
              수정
            </button>
            <button
              onClick={deleteHandler}
              className="p-1 py-3 px-6 font-bold bg-red-600 mx-2 rounded-lg hover:bg-red-500 hover:border-1 hover:border-red-600"
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
