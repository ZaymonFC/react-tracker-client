//
// ──────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: W E B P A C K   C O N F I G U R A T I O N   F I L E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────
//


// ─── INIT CSS EXTRACTER ─────────────────────────────────────────────────────────
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
});


module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".scss"],
  },
  module: {
    rules: [
      //
      // ─── TSLINT PRECOMPILE LINT ──────────────────────────────────────
      //
      {
        enforce: "pre",
        test: /\.tsx?$/,
        loader: [
          {
            loader: "tslint-loader",
            options: {
              tsConfigFile: 'tsconfig.json',
              emitErrors: true,
              failOnHint: true,
            },
          },
        ]
      },
      //
      // ─── SASS COMPILE ────────────────────────────────────────────────
      //
      {
        test: /\.(scss|sass)?$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader", options: {
              // sourceMap: true,
            },
          }, {
            loader: "sass-loader", options: {
              // sourceMap: true,
            },
          }
        ]
      },
      //
      // ─── TYPSCRIPT COMPILE ───────────────────────────────────────────
      //
      {
        test: /\.tsx?$/,
        loader: [
          {
            loader: "awesome-typescript-loader",
            options: { },
          },
        ],
      },
      //
      // ─── GENERATE SOURCE MAPPING ─────────────────────────────────────
      //
      {
        enforce: "pre", 
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ]
  },
  //
  // ─── DEFINE EXTERNAL VARIABLES ──────────────────────────────────────────────────
  //
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
}