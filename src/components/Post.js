import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  const loginUser = useSelector((state) => state.loginReducer.loginUser);
  const { id, title, content, writer, like, view } = props.post;
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [isHover, setHover] = useState(false);
  const buttonWrapRef = useRef();
  const editHandler = () =>
    dispatch({
      type: "EDIT_POST",
      payload: { ...props.post, userName: loginUser.name },
    });
  const deleteHandler = () =>
    dispatch({
      type: "DELETE_POST",
      payload: { ...props.post, userName: loginUser.name },
    });
  const likeHandler = () =>
    dispatch({
      type: "UP_LIKE_POST",
      payload: { ...props.post, userName: loginUser.name },
    });

  const toDetailsHandler = () => {
    dispatch({
      type: "ON_DETAILS_POST",
      payload: { ...props.post, userName: loginUser.name },
    });
    nav("/postDetails");
  };

  useEffect(() => {
    console.log("Post", loginUser);
  }, [loginUser]);

  return (
    <tr className="text-white h-14 w-11/12  mx-3 rounded-xl flex justify-between px-5 py-4 overflow-hidden relative group cursor-pointer hover:bg-slate-700/20">
      <td className="m-auto">{id}</td>
      <td className="m-auto">{title}</td>
      <td className="m-auto">{content}</td>
      <td className="m-auto">{writer}</td>
      <td className="m-auto">{like}</td>
      <td className="m-auto">{view}</td>
      <div
        className="absolute right-0 opacity-0  translate-x-80 transition-all group-hover:translate-x-0 group-hover:opacity-100 h-full z-50"
        ref={buttonWrapRef}
      >
        <button
          onClick={likeHandler}
          className="p-1 px-6 font-bold bg-blue-600 mx-2 rounded-lg hover:bg-blue-500 hover:border-1 hover:border-blue-600 z-50"
        >
          죠아요
        </button>
        <button
          onClick={toDetailsHandler}
          className="p-1 px-6 font-bold bg-green-600 mx-2 rounded-lg hover:bg-green-500 hover:border-1 hover:border-green-600 z-50"
        >
          수정
        </button>
        <button
          onClick={deleteHandler}
          className="p-1 px-6 font-bold bg-red-600 mx-2 rounded-lg hover:bg-red-500 hover:border-1 hover:border-red-600 z-50"
        >
          삭제
        </button>
      </div>
    </tr>
  );
};

export default Post;
