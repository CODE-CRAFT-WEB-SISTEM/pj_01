let path = require("path");

module.exports = {
  devServer: {
    static: {
      path: path.resolve(__dirname, "dist"),
    },
    compress: "true",
    port: "8158",
  },
  entry: {
    main: "./src/script/index.js",
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};