const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  // Preload
  {
    mode: process.env.NODE_ENV || 'development',
    target: 'electron-preload',
    entry: './src/main/preload.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'preload.js',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  },

  // Renderer
  {
    mode: process.env.NODE_ENV || 'development',
    target: 'web',
    entry: './src/renderer/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'renderer.js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
      }),
    ],
  },

  // Main
  {
    mode: process.env.NODE_ENV || 'development',
    target: 'electron-main',
    entry: './src/main/index.ts',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'main.js',
    },
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    node: {
      __dirname: false,
      __filename: false,
    },
  },
];
