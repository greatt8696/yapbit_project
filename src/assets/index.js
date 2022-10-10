const imgUrls = [
  "https://firebasestorage.googleapis.com/v0/b/kyoungil-f459e.appspot.com/o/jyo1.png?alt=media&token=e5bbae11-eeec-4b29-9b0a-f775726b8410",
  "https://firebasestorage.googleapis.com/v0/b/kyoungil-f459e.appspot.com/o/jyo2.png?alt=media&token=47e3b9c6-7c51-4385-8d7e-3090106f4028",
  "https://firebasestorage.googleapis.com/v0/b/kyoungil-f459e.appspot.com/o/jyo3.png?alt=media&token=6149a393-5f08-459f-abe0-b27457b519be",
  "https://firebasestorage.googleapis.com/v0/b/kyoungil-f459e.appspot.com/o/jyo4.png?alt=media&token=9376e908-a73c-48e1-b416-b65a5c67fc29",
];

export const getImage = () => {
  const size = imgUrls.length;
  const randNum = parseInt(size * Math.random());
  return imgUrls[randNum]
};

export default imgUrls;
