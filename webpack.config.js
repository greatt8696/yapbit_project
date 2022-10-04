const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development", // 1
  entry: "./src/index.js", // 2
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
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
        include: path.resolve(__dirname, 'src'),
        //로더는 오른쪽부터 읽어들이므로 postcss-loader를 맨 오른쪽에 넣어준다.
        use: ["html-loader","style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  "scripts": {
    "start": "webpack serve",
    "build": "export NODE_ENV=production && webpack"
  },
  
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    open: true,
    port: 'auto',
  },
};
