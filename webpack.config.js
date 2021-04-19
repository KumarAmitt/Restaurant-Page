const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: mode,
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  }
};