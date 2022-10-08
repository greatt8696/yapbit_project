const initState = {
  postDetail: {},
  nextPostId: 2,
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
};

const postReducer = (state = initState, action) => {
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
    default:
      return state;
  }
};

export default postReducer;
