import imgUrls from "../assets/index";

const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const setLocalStorage = (key, newData) => {
  localStorage.setItem(key, JSON.stringify(newData));
  return newData;
};

const initUser = [
  { id: 0, name: "뀨", pwd: "123", imgUrl: imgUrls[0] },
  { id: 1, name: "죠르디는귀여워", pwd: "123", imgUrl: imgUrls[1] },
  { id: 2, name: "귀여워는 죠르디", pwd: "123", imgUrl: imgUrls[2] },
  { id: 3, name: "죠르디뀨", pwd: "123", imgUrl: imgUrls[3] },
];

const initPost = [
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
];

const initMsg = [
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
];

const initDatas = () => {
  setLocalStorage("user", initUser);
  setLocalStorage("post", initPost);
  setLocalStorage("msg", initMsg);
};

const singUpUser = (newUser) => {
  setLocalStorage("user", newUser);
  return newUser;
};

const compareUser = (inputUser) => {
  const users = getLocalStorage("user");
  const findUser = users.filter((user) => user.id === inputUser.id);
  if (findUser === []) return { ok: false, msg: "입력한 아이디는 없습니다." };
  if (findUser[0]) {
    return findUser[0].pwd === inputUser.pwd
      ? { ok: true, msg: "로그인 성공" }
      : { ok: false, msg: "입력한 아이디는 없습니다." };
  }
};

const addPost = (newPost) => {
  const prevDatas = getLocalStorage("post");
  const prevPostId = parseInt(localStorage.getItem("nextPostId"));
  const newDatas = [...prevDatas, { ...newPost, id: prevPostId }];
  setLocalStorage("post", newDatas);
  localStorage.setItem("newPostId", prevPostId + 1);
  return newDatas;
};

const delPost = (id) => {
  const prevDatas = getLocalStorage("post");
  const newDatas = prevDatas.filter((post) => post.id !== id);
  setLocalStorage("post", newDatas);
  return newDatas;
};

const ChangePost = (newPost) => {
  const prevDatas = getLocalStorage("post");
  const newDatas = prevDatas.map((post) =>
    post.id === newPost.id ? newPost : post
  );
  setLocalStorage("post", newDatas);
  return newDatas;
};

export { ChangePost, delPost, addPost, compareUser, singUpUser, initDatas };
