//
// ──────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: W E B P A C K   C O N F I G U R A T I O N   F I L E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────
//
module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      //
      // ─── TSLINT PRECOMPILE STEP ──────────────────────────────────────
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
      // ─── SCSS COMPILE ────────────────────────────────────────────────
      //
      {
        test: /\.scss?$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }
        ]
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