var path = require('path');
var Webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  entry: {
    app: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx$ || \.js$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
            'stage-2'
          ]
        },
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss']
  },
  plugins: [
    new Webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ]
}
