const HtmlWebPackPlugin = require("html-webpack-plugin")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const deps = require("./package.json").dependencies
module.exports = {
  entry: "./src/index",
  mode: "development",
  // devtool: "cheap-source-map",
  output: {
    publicPath: "http://localhost:8080/",
    chunkFilename: "[id].[contenthash].js",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  devServer: {
    port: 8080,
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
      name: "app1",
      filename: "remoteEntry.js",
      library: { type: "var", name: "app1" },
      remotes: {
        shell: "shell",
      },
      exposes: {
        "./AppService": "./src/AppService",
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
      ],
    }),

    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
}
