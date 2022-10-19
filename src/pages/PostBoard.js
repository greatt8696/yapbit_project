import React, { useState } from "react";
import AddPost from "../components/AddPost";
import Posts from "../components/Posts";

const PostBoard = () => {
  const [onAdd, setOnAdd] = useState(false);
  return (
    <div className="w-full h-full bg-[#ff6c10] mt-5 flex">
      <Posts setOnAdd={setOnAdd} onAdd={onAdd}></Posts>
      {onAdd && <AddPost setOnAdd={setOnAdd} onAdd={onAdd} />}
    </div>
  );
};

export default PostBoard;
