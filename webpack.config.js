const path = require("path");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".ts"],  // Add .ts extension so Webpack resolves TS files too
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.ts$/, // Add a rule for handling .ts files
        exclude: /node_modules/,
        use: "ts-loader", // Use ts-loader to compile TypeScript files
      },
    ],
  },
};
