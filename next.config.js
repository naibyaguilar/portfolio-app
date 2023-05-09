/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  // webpack: (config) =>
  //   config.module.rules.push({
  //     test: /\.module\.css$/,
  //     use: [
  //       {
  //         loader: "css-loader",
  //         options: {
  //           importLoaders: 1,
  //           modules: {
  //             localIdentName: "[local]__[hash:base64:5]",
  //           },
  //         },
  //       },
  //       {
  //         loader: "postcss-loader",
  //         options: {
  //           postcssOptions: {
  //             plugins: [["autoprefixer"]],
  //           },
  //         },
  //       },
  //     ],
  //     include: path.resolve(__dirname, "src"),
  //   }),
};

module.exports = nextConfig;
