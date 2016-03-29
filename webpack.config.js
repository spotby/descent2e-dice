module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname,
    filename: "./js/app.js"
  },
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.css$/, loader: ["style", "css"] },
      { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"] },
      { test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    alias: {
      'sass': __dirname + '/src/sass',
      'components': __dirname + '/src/components',
      'reducers': __dirname + '/src/reducers',
      'actions': __dirname + '/src/actions',
      'pages': __dirname + '/src/pages'
    }
  },
  devServer: { historyApiFallback: true }
};