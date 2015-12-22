var webpack = require('webpack');

module.exports = {
  context: __dirname + "/app",
  entry: {
      javascript: ["bootstrap-webpack!./bootstrap.config.js", "./app.js"],
      html: "./index.html"
  },
  output:{
    filename: "app.js",
    path: __dirname + "/dist"
  },
  plugins: [
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery"
   })
],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-1']
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  }
};
