import React, { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const loginUser = useSelector((state) => state.loginUser);
  const [userDropdown, setUserDropdown] = useState(false);
  const [isTransEnd, setTransEnd] = useState();
  const nav = useNavigate();

  const goToMain = () => nav("/");
  const goToSignin = () => nav("/signin");
  const goToPosts = () => nav("/posts");
  const goToExchange = () => nav("/exchange");
  const goToLogin = () => nav("/login");
  const goToProfile = () => nav("/profile");
  const goToMywallet = () => nav("/mywallet");

  const dropdownRef = useRef();
  const dropdown = dropdownRef.current;

  const transEndHandler = () => {
    setTransEnd(true);
  };

  const click = () => {
    dropdown.classList.toggle("off-dropdown");
  };

  const leaveDropDownHandler = () => {
    dropdown.classList.add("off-dropdown");
  };

  const dropdownTransitionHandler = (e) => {
    console.log(e);
  };

  return (
    <div>
      <div className="w-full theme-three h-16 justify-center font-bold">
        <div className="flex max-w-6xl min-w-3xl w-full h-full mx-auto">
          <div
            className="text-4xl my-auto mr-auto px-2 cursor-pointer"
            onClick={goToMain}
          >
            YAPBIT
          </div>
          <ul className="ml-6 flex w-full h-full mx-auto items-stretch gap-10 place-content-center">
            <li
              className="w-24 flex items-stretch cursor-pointer group transition-all"
              onClick={goToPosts}
            >
              <a className="my-auto text-lg mx-auto w-full text-center group-hover:text-orange-700 group-hover:bg-white/0 rounded-lg group-hover:animate-wiggle transition-all">
                게시판
              </a>
            </li>
            <li
              className="w-24 flex items-stretch cursor-pointer group transition-all"
              onClick={goToExchange}
            >
              <a className="my-auto text-lg mx-auto w-full text-center group-hover:text-orange-700 group-hover:bg-white/0 rounded-lg group-hover:animate-wiggle transition-all">
                거래소
              </a>
            </li>
            <li
              className="w-24 flex items-stretch cursor-pointer group transition-all"
              onClick={goToMywallet}
            >
              <a className="my-auto text-lg mx-auto w-full text-center group-hover:text-orange-700 group-hover:bg-white/0 rounded-lg group-hover:animate-wiggle transition-all">
                투자내역
              </a>
            </li>
            <li
              className="w-24 flex items-stretch cursor-pointer group transition-all"
              onClick={goToPosts}
            >
              <a className="my-auto text-lg mx-auto w-full text-center group-hover:text-orange-700 group-hover:bg-white/0 rounded-lg group-hover:animate-wiggle transition-all">
                게시판
              </a>
            </li>
          </ul>
          <ul className="flex w-96 h-full ml-auto items-stretch gap-3 justify-end">
            {!isLogin && (
              <li
                className="w-24 flex items-stretch cursor-pointer"
                onClick={goToSignin}
              >
                <a className="my-auto text-lg mx-auto w-full text-center">
                  회원가입
                </a>
              </li>
            )}
            {!isLogin && (
              <li
                className="w-24 flex items-stretch cursor-pointer"
                onClick={goToLogin}
              >
                <a className="my-auto text-lg mx-auto w-full text-center">
                  로그인
                </a>
              </li>
            )}
            {isLogin && (
              <li className=" flex relative px-2">
                <div
                  className="w-48 absolute top-0 right-0 h-60 z-10 group"
                  onMouseLeave={leaveDropDownHandler}
                >
                  <img
                    onClick={click}
                    className="hover:scale-105 transition-all cursor-pointer w-14 h-14 rounded-full my-auto mx-auto ring-4 ring-theme-one-to z-30 absolute right-2 top-1"
                    src={loginUser.imgUrl}
                  />
                  <div
                    ref={dropdownRef}
                    className="absolute right-1 top-[70px] w-40 overflow-hidden rounded-lg shadow-lg transition-all off-dropdown z-30"
                  >
                    <div className="w-40">
                      <div className="relative grid gap-6 theme-three px-3 py-4 sm:gap-8 sm:p-5">
                        <a className=" cursor-pointer -m-3 flex items-start rounded-lg p-3 hover:bg-gray-500/50 transition-all">
                          <svg
                            className="h-6 w-6 flex-shrink-0 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            />
                          </svg>
                          <div className="ml-4">
                            <p
                              className="text-base text-white font-bold"
                              onClick={goToProfile}
                            >
                              내정보
                            </p>
                          </div>
                        </a>

                        <a className=" cursor-pointer -m-3 flex items-start rounded-lg p-3 hover:bg-gray-500/50 transition-all">
                          <svg
                            className="h-6 w-6 flex-shrink-0 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                            />
                          </svg>
                          <div className="ml-4">
                            <p className="text-base  text-white font-bold">
                              로그아웃
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
