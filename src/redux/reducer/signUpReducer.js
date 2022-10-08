const initState = {
};

const signUpReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SIGNUP_USER": {
      return { ...state, isLogin: true, logginUser: payload };
    }

    default:
      return state;
  }
};

export default signUpReducer;
