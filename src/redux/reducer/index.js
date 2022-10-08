import imgUrls from "../../assets/index";

const initState = {
  isLogin: true,
  isLoading: false,
  onModal: false,
  loginUser: { id: 0, name: "뀨", pwd: "123", imgUrl: imgUrls[0] },
  postDetail: {},
  nextPostId: 2,
  currentValue: {},
  coinsPrice: {},
  posts: [
    {
      id: 0,
      title: "테스트용 제목뀨1",
      content: "테스트용 내용뀨1",
      writer: "뀨",
      createdAt: "지금",
    },
    {
      id: 1,
      title: "테스트용 제목뀨2",
      content: "테스트용 내용뀨2",
      writer: "뀨",
      createdAt: "지금",
    },
  ],
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
  nextUserId: 2,
  users: [
    { id: 0, name: "뀨", pwd: "123", imgUrl: imgUrls[0] },
    { id: 1, name: "죠르디는귀여워", pwd: "123", imgUrl: imgUrls[1] },
    { id: 2, name: "귀여워는 죠르디", pwd: "123", imgUrl: imgUrls[2] },
    { id: 3, name: "죠르디뀨", pwd: "123", imgUrl: imgUrls[3] },
  ],
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_POST": {
      return { ...state, posts: [...state.posts, payload] };
    }
    case "DEL_POST": {
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== payload.id)],
      };
    }
    case "CHANGE_POST": {
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id !== payload.id ? payload : post
          ),
        ],
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

export default reducer;
