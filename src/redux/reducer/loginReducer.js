import imgUrls from "../../assets/index";

const initState = {
  isLogin: false,
  isLoading: false,
  loginUser: {},
  nextUserId: 2,
  users: [
    { id: 0, name: "뀨", pwd: "123", imgUrl: imgUrls[0] },
    { id: 1, name: "죠르디는귀여워", pwd: "123", imgUrl: imgUrls[1] },
    { id: 2, name: "귀여워는 죠르디", pwd: "123", imgUrl: imgUrls[2] },
    { id: 3, name: "죠르디뀨", pwd: "123", imgUrl: imgUrls[3] },
  ],
};

const loginReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SIGNUP_USER": {
      state.nextUserId++;
      return {
        ...state,
        users: [
          ...state.users,
          {
            ...payload,
            imgUrl: imgUrls[parseInt(3 * Math.random())],
            id: state.nextUserId,
          },
        ],
      };
    }
    case "LOGIN_USER": {
      const findUser = state.users.find(
        (user) => user.name === payload.name && user.pwd === payload.pwd
      );
      return {
        ...state,
        isLogin: findUser ? true : false,
        loginUser: findUser ? findUser : {},
      };
    }

    case "LOGOUT_USER": {
      return { ...state, isLogin: false, loginUser: {} };
    }

    default:
      return state;
  }
};

export default loginReducer;
