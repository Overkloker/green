/* jshint node: true */
var path = require("path");
module.exports = {
  entry: {
    front: "./src/modules/front/index.js"
  },
  output: {
    publicPath: "/assets/",
    path: path.resolve(__dirname, "./build"),
    filename: "[name].application.js"
  },
  resolve: {
    root: [
      path.resolve(__dirname, "./src")
    ]
  },
  "module": {
    loaders: [
      {test: /[\/]angular\.js$/, loader: "exports?angular"},
      {test: /\.css$/, loader: "style!css"},
      {test: /\.less$/, loader: "style!css!less"},
      {test: /\.json/, loader: "json"},
      {test: /\.html$/, loader: "ngtemplate?relativeTo=/src/!html"},
      {test: /\.png$/, loader: "url?limit=100000"},
      {test: /\.gif$/, loader: "url?limit=10000"},
      {test: /\.(jpg|woff|woff2|eot|svg|ttf)(\?.*)?$/, loader: "file"}
    ],
    noParse: [
      /angular[\/]angular\.js$/,
      /bootstrap\.js$/,
      /jquery\.js$/,
      /jquery\-ui\.js$/,
      /moment\.js$/,
      /ui\-bootstrap\-tpls\.js/
    ]
  },
  plugins: []
};
