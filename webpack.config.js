// third-party
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyFiles = require("copy-webpack-plugin");

module.exports = {
  entry: "./IndexPage.js",
  devServer: { historyApiFallback: true },
  output: {
    filename: "[contenthash:8].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
        include: path.join(__dirname, "images"),
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: "index.html",
    }),
    new CopyFiles({
      patterns: [{ from: "images", to: "images", noErrorOnMissing: true }],
    }),
  ],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json"],
  },
};
