const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(png|gif|jpg|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new WebpackPwaManifestPlugin({
      name: "Marvel world",
      shortname: "Marvel",
      description: "Welcome to the incredible marvel world",
      background_color: "#000",
      theme_color: "#000",
      icons: [
        {
          src: path.resolve("src/assets/images/logos/marvel-icon.png"),
          sizes: [96, 128, 192, 256, 384, 512],
        },
        {
          src: path.resolve("src/assets/images/logos/marvel-icon.png"),
          size: "1024x1024", // you can also use the specifications pattern
        },
        {
          src: path.resolve("src/assets/images/logos/marvel-icon.png"),
          size: "1024x1024",
          purpose: "maskable",
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp("https://i.annihil.us/u/prod/marvel/i/mg/"),
          handler: "CacheFirst",
          options: {
            cacheName: "images",
          },
        },

        {
          urlPattern: new RegExp("https://gateway.marvel.com:443/v1/public"),
          handler: "NetworkFirst",
          options: {
            cacheName: "api",
          },
        },
      ],
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin(),
  ],
  devServer: {
    port: 8081,
  },
};
