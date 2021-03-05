const ModuleFederationPlugin = require(
  "webpack/lib/container/ModuleFederationPlugin");
const CompressionPlugin = require("compression-webpack-plugin")
const path = require("path");

module.exports = {
  output: {
    uniqueName: "taskana-web",
    publicPath: "http://localhost:4200/"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      filename: "[name][ext].gzip"
    }),
    new ModuleFederationPlugin({
      shared: {
        "@angular/core": {
          eager: true,
          singleton: true,
          requiredVersion: '~11.1.0'
        },
        "@angular/common": {
          eager: true,
          singleton: true,
          requiredVersion: '~11.1.0'
        },
        "@angular/router": {
          eager: true,
          singleton: true,
          requiredVersion: '~11.1.0'
        },
        "@ngxs/store": {
          eager: true,
          singleton: true,
          strictVersion: false
        },
      }

    }),
  ],
};
