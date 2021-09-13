const path = require('path');
const entry = ['./client/index.js'];
const output = {
  path: path.resolve(__dirname, 'build'),
  filename: 'bundle.js',
};

module.exports = {
  mode: process.env.NODE_ENV,
  entry,
  output,
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            '@babel/plugin-transform-runtime',
            '@babel/transform-async-to-generator',
          ],
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};

// const webpack = require('webpack');
// const path = require('path');

// module.exports = {
//   entry: [
//     // entry point of our app
//     './client/index.js',
//   ],
//   output: {
//     path: path.resolve(__dirname, 'build'),
//     publicPath: '/',
//     filename: 'bundle.js',
//   },
//   devtool: 'eval-source-map',
//   mode: 'development',
//   devServer: {
//     // // Required for Docker to work with dev server
//     // host: '0.0.0.0',
//     //host: localhost,
//     port: 8080,
//     // match the output path
//     contentBase: path.resolve(__dirname, 'build'),
//     //enable HMR on the devServer
//     hot: true,
//     //match the output 'publicPath'
//     publicPath: '/',
//     // fallback to root for other urls
//     historyApiFallback: true,

//     inline: true,

//     headers: { 'Access-Control-Allow-Origin': '*' },
//     // proxy is required in order to make api calls to express server while using hot-reload webpack server
//     // routes api fetch requests from localhost:8080/api/* (webpack dev server) to localhost:3000/api/* (where our Express server is running)
//     proxy: {
//       '/**': {
//         target: 'http://localhost:3000/',
//         secure: false,
//       },
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /.(css|scss)$/,
//         exclude: /node_modules/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.(png|svg|jpe?g|gif|zip)$/,
//         include: /assets/,
//         use: [
//           {
//             loader: 'file-loader',
//           },
//         ],
//       },
//     ],
//   },
// };
