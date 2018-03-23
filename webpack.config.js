module.exports = {

  entry: "./client/app.js",


  output: {
    filename: "public/bundle.js"
  },
  


  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include:/client/,

        query: {
          
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  devtool: "eval-source-map"
}