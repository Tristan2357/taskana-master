const CompressionPlugin = require(`compression-webpack-plugin`);
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const path = require(`path`);
module.exports = {
  output: {
    publicPath: "http://localhost:4200/",
    uniqueName: "taskana",
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new CompressionPlugin({
      test: /\.(js|css|html|svg|txt|eot|otf|ttf|gif)$/,
      filename: "[name][ext].gzip"
    }),
    new ModuleFederationPlugin({
      remotes: {
        'taskana_workplace':"taskana_workplace@http://localhost:1337/remoteEntry.js"
      },
      shared: {
        "@angular/core": { eager: true, singleton: true },
        "@angular/common": { eager: true, singleton: true },
        "@angular/router": { eager: true, singleton: true },
      },
    }),
  ]
};
