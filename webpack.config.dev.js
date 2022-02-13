var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var basePath = __dirname;

module.exports = {
  target: "web",
  mode: 'none',
  performance: {
      hints: false,
      maxEntrypointSize: 1024000,
      maxAssetSize: 1024000
  },
  context: path.join(basePath, 'src'),
  resolve: {
    extensions: ['.js', '.ts', '.jsx']
  },
  entry: {
    app: './app.jsx'
  },
  output: {
    path: path.join(basePath, 'dist/dev'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(woff|ttf|otf|eot|woff2|svg|png|jpg|gif|svg)$/i,
        use: ["url-loader"]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /(\.css$)/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/dev'),
    },
    compress: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      hash: true,
    })
  ]
};
