import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const Posts = ({ setOnAdd, onAdd }) => {
  const posts = useSelector((state) => state.postReducer.posts);

  useEffect(() => {
    console.log(posts);
  }, posts);

  const writeHandler = () => setOnAdd(true);

  return (
    <table className="table-auto h-full w-11/12 rounded-xl flex flex-col mx-auto">
      <button onClick={writeHandler} className="w-16 h-16 bg-green-600 p-2">
        글쓰기
      </button>
      <thead className="justify-between w-11/12 text-white bg-slate-400/50 h-auto p-2 mx-5 rounded-xl flex ">
        <tr className="text-white h-auto w-11/12  mx-3 rounded-xl flex justify-between px-5">
          <th className="font-bold">id</th>
          <th className="font-bold">제목</th>
          <th className="font-bold">내용</th>
          <th className="font-bold">작성자</th>
          <th className="font-bold">죠아요</th>
          <th className="font-bold">조회수</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, idx) => (
          <Post post={post} key={idx} />
        ))}
      </tbody>
    </table>
  );
};

export default Posts;
