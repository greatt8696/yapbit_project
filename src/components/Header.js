import React, { useState } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const loginUser = useSelector((state) => state.loginUser);
  const [userDropdown, setUserDropdown] = useState(false);

  const dropDownHandler = () => {
    const dropdown = document.getElementById("dropdown");
    setUserDropdown(!userDropdown);
    if (!dropdown.classList.contains("off-dropdown")) {
      dropdown.classList.toggle("hidden");
      setTimeout(() => {
        dropdown.classList.toggle("off-dropdown");
      }, 100);
    } else {
      dropdown.classList.toggle("off-dropdown");
      setTimeout(() => {
        dropdown.classList.toggle("hidden");
      }, 100);
    }
  };
  return (
    <div>
      <div className="w-full theme-three h-16 justify-center  font-bold">
        <div className="flex max-w-6xl w-full h-full mx-auto">
          <div className="text-4xl my-auto mr-auto px-2 cursor-pointer">YAPBIT</div>
          <ul className="  flex w-full h-full mx-auto items-stretch gap-3">
            <li className="w-24 flex items-stretch cursor-pointer">
              <a className="my-auto text-lg mx-auto w-full text-center">메인</a>
            </li>
            <li className="w-24 flex items-stretch cursor-pointer">
              <a className="my-auto text-lg mx-auto w-full text-center">
                게시판
              </a>
            </li>
            {/* <li className="w-24 flex items-stretch cursor-pointer">
            <a className="my-auto text-lg mx-auto w-full text-center"></a>
          </li> */}
          </ul>
          <ul className="flex w-full h-full ml-auto items-stretch gap-3 justify-end">
            {!isLogin && (
              <li className="w-24 flex items-stretch cursor-pointer">
                <a className="my-auto text-lg mx-auto w-full text-center">
                  회원가입
                </a>
              </li>
            )}
            {!isLogin && (
              <li className="w-24 flex items-stretch cursor-pointer">
                <a className="my-auto text-lg mx-auto w-full text-center">
                  로그인
                </a>
              </li>
            )}
            {isLogin && (
              <li className=" flex relative px-2">
                <img
                  onClick={dropDownHandler}
                  className="cursor-pointer w-14 h-14 rounded-full my-auto mx-auto ring-4 ring-theme-one-to"
                  src={loginUser.imgUrl}
                ></img>

                <div
                  id="dropdown"
                  className="absolute right-1 top-[70px] w-40 overflow-hidden rounded-lg shadow-lg ring-opacity-5 transition-all  off-dropdown hidden"
                >
                  <div className="relative grid gap-6 theme-three px-3 py-4 sm:gap-8 sm:p-5">
                    <a
                      href="#"
                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-500/50 transition-all"
                    >
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
                        <p className="text-base  text-white font-bold">
                          내정보
                        </p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-500/50 transition-all"
                    >
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
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
