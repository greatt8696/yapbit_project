const initState = {
  postDetail: {},
  nextPostId: 7,
  posts: [
    {
      id: 0,
      title: "테스트용 제목뀨1",
      content: "테스트용 내용뀨1",
      like: 0,
      view: 0,
      writer: "뀨",
      createdAt: "지금",
    },
    {
      id: 1,
      title: "테스트용 제목뀨1",
      content: "테스트용 내용뀨1",
      like: 0,
      view: 0,
      writer: "뀨",
      createdAt: "지금",
    },
    {
      id: 2,
      title: "테스트용 제목뀨1",
      content: "테스트용 내용뀨1",
      like: 0,
      view: 0,
      writer: "뀨",
      createdAt: "지금",
    },
    {
      id: 3,
      title: "테스트용 제목뀨1",
      content: "테스트용 내용뀨1",
      like: 0,
      view: 0,
      writer: "뀨",
      createdAt: "지금",
    },
    {
      id: 4,
      title: "테스트용 제목뀨1",
      content: "테스트용 내용뀨1",
      like: 0,
      view: 0,
      writer: "뀨",
      createdAt: "지금",
    },
    {
      id: 5,
      title: "테스트용 제목뀨1",
      content: "테스트용 내용뀨1",
      like: 0,
      view: 0,
      writer: "뀨",
      createdAt: "지금",
    },
    {
      id: 6,
      title: "테스트용 제목뀨1",
      content: "테스트용 내용뀨1",
      like: 0,
      view: 0,
      writer: "뀨",
      createdAt: "지금",
    },
  ],
};

const postReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_POST": {
      state.nextPostId++;
      return {
        ...state,
        posts: [...state.posts, { ...payload, id: state.nextPostId }],
      };
    }
    case "EDIT_POST": {
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === payload.id ? payload : post
          ),
        ],
      };
    }

    case "DELETE_POST": {
      return {
        ...state,
        posts: [...state.posts.filter((post) => post.id !== payload.id)],
      };
    }

    case "UP_LIKE_POST": {
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === payload.id ? { ...post, like: post.like + 1 } : post
          ),
        ],
      };
    }

    case "UP_VIEW_POST": {
      return {
        ...state,
        posts: [
          ...state.posts.map((post) =>
            post.id === payload.id ? { ...post, view: post.view + 1 } : post
          ),
        ],
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
    case "ON_DETAILS_POST": {
      return { ...state, postDetail: payload };
    }

    default:
      return state;
  }
};

export default postReducer;
