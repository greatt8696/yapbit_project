import imgUrls from "../../assets/index";

const initState = {
  isLogin: true,
  isLoading: false,
  loginUser: { id: 0, name: "뀨", pwd: "123", imgUrl: imgUrls[0] },
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
      return {
        ...state,
        isLogin: true,
        logginUser: payload,
        users: [...state.users, payload],
      };
    }
    case "LOGIN_USER": {
      return { ...state, isLogin: true, logginUser: payload };
    }

    case "LOGOUT_USER": {
      return { ...state, isLogin: false, logginUser: {} };
    }

    default:
      return state;
  }
};

export default loginReducer;
