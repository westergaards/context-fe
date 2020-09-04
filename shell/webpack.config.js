const HtmlWebPackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const deps = require("./package.json").dependencies
module.exports = {
  entry: "./src/index",
  mode: "development",
  // devtool: "source-map",
  output: {
    publicPath: "http://localhost:8081/",
    chunkFilename: "[id].[contenthash].js",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8081,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      library: { type: "var", name: "shell" },
      filename: "remoteEntry.js",
      remotes: {
        // app1: "app1@http://localhost:8080/remoteEntry.js",
        app1: "app1",
      },
      exposes: {
        "./Shell": "./src/Shell",
        "./Service": "./src/Service",
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
        // Workaround explaination: https://www.youtube.com/watch?v=-LNcpralkjM&t=540
        "./src/Service",
      ],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
}
