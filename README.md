이미 tailwind가 세팅되어있으면 안쓰셔도 돼요.

1. package.json 추가
    npm install -D tailwindcss
    npm install -D postcss
    npm install -D autoprefixer


    //빌드하려면
    npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin style-loader css-loader postcss-loader


2. npx tailwindcss init


2. tailwind.config.js 파일
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: ["./src/**/*.{html,js}"],  <- 추가
      theme: {
        extend: {},
      },
      plugins: [],
    }


3. src/input.css 파일추가
    @tailwind base;
    @tailwind components;
    @tailwind utilities;


4. src/index.js에 import추가
  import './input.css'; 

5. webpack.config.js 파일 생성
    module: {
      rules: [
        {
          test: /.jsx?$/,
          include: [path.resolve(__dirname, "src")],
          exclude: [path.resolve(__dirname, "node_modules")],
          loader: "babel-loader",
        },
        {
          test: /.css?$/,
          exclude: [],
          //로더는 오른쪽부터 읽어들이므로 postcss-loader를 맨 오른쪽에 넣어준다.
          use: ["style-loader", "css-loader", "postcss-loader"],
        },
      ],
    },