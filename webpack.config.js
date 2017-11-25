module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },

  // Enable source mapping for developer tools and debugging output
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  module: {
    rules: [
      // Route all files with .ts or tsx to the typescript loader (awesome-typescript-loader)
      { 
        test: /\.tsx?$/,
        loader: [
        //   { 
        //     loader: "tslint-loader",
        //     options: {
        //       tsConfigFile: 'tsconfig.json'
        //     },
        //   },
          {
            loader: "awesome-typescript-loader",
            options: { },
          },
        ],
        
      },
      {
        enforce: "pre", 
        test: /\.js$/,
        loader: "source-map-loader",
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
}