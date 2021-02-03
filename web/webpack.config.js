const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const CompressionPlugin = require("compression-webpack-plugin")
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

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

        // For remotes (please adjust)
        // name: "taskana-web",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },

        // For hosts (please adjust)
      remotes: {
        'taskana_workplace':"taskana_workplace@http://localhost:1337/remoteEntry.js"
      },

        shared: {
          "@angular/core": { singleton: true, requiredVersion: '~11.1.0' },
          "@angular/common": { singleton: true, requiredVersion: '~11.1.0' },
          "@angular/router": { singleton: true, requiredVersion: '~11.1.0' },

          ...sharedMappings.getDescriptors()
        }

    }),
    sharedMappings.getPlugin(),
  ],
};
