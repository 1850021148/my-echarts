const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const output_path = path.join(__dirname, './dist');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: output_path,
    filename: 'index.js',
  },
  devServer: {
    contentBase: output_path,
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|cjs)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test: /\.(css|less)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif)/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024,
          },
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/i,
        use: 'file-loader'
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      title: '可视化界面',
      inject: 'body',
    }),
  ],
}

// (function copyPublicDir() {
//   fs.mkdir('./dist', () => {
//     fs.mkdir('./dist/public', console.log)
//     travel('./public', pathname => {
//       console.log(pathname) // public\index.js
//       fs.copyFile(
//         pathname, 
//         path.join('./dist/', pathname),
//         console.log
//       )
//     })
//   })
//   function travel(dir, callback) {
//     fs.readdirSync(dir).forEach( function (file) {
//       let pathname = path.join(dir, file)
  
//       if (fs.statSync(pathname).isDirectory()) {
//         travel(pathname, callback)
//       } else {
//         callback(pathname)
//       }
//     })
//   }
// })()