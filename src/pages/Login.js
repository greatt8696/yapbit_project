import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    pwd: "",
  });

  const inputsHandler = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const gotoSignup = () => nav("/signup");
  const gotoMain = () => nav("/");
  const loginHandler = () => {
    dispatch({ type: "LOGIN_USER", payload: inputs });
    gotoMain();
  };

  return (
    <div className="relative w-screen h-screen">
      <div className="flex flex-col absolute w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-500 rounded-2xl p-8">
        <label className="mx-auto text-3xl">로그인</label>
        <div className="flex flex-col mt-2">
          <label>아이디</label>
          <input
            type={"text"}
            className={"p-2 rounded-md mb-5 text-black"}
            name={"name"}
            onChange={inputsHandler}
            value={inputs.name}
          ></input>
          <label>비밀번호</label>
          <input
            type={"text"}
            className={"p-2 rounded-md mb-5 text-black"}
            name={"pwd"}
            onChange={inputsHandler}
            value={inputs.pwd}
          ></input>
          <button
            onClick={loginHandler}
            className="bg-green-600 rounded-md py-2 mb-5"
          >
            로그인
          </button>
          <button
            onClick={gotoSignup}
            className="bg-yellow-600 rounded-md py-2"
          >
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
