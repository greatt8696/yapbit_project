const initState = {
  nextRoomId: 1,
  myRooms: [
    {
      id: 0,
      users: [],
    },
  ],
  nextMsgId: 2,
  msgs: [
    {
      id: 0,
      sender: "뀨",
      content: "내 메세지뀨 1",
      createdAt: "지금",
    },
    {
      id: 1,
      sender: "죠르디는귀여워",
      content: "너 메세지뀨 1",
      createdAt: "지금",
    },
    {
      id: 2,
      sender: "뀨",
      content: "내 메세지뀨 2",
      createdAt: "지금",
    },
  ],
};

const msgReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "1LOGIN_USER": {
      return { ...state, isLogin: true, logginUser: payload };
    }

    case "1LOGOUT_USER": {
      return { ...state, isLogin: false, logginUser: {} };
    }

    default:
      return state;
  }
};

export default msgReducer;
