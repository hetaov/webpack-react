'use strict';

const path = require('path');
const webpack = require('webpack');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const distPath = path.resolve(__dirname, 'www');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const context = path.resolve(__dirname, 'src');

const config = {
    entry: {
        index: path.join(__dirname, 'src/index.js')
    },
    output: {
        path: distPath,
        filename: '[name]_[hash:6].js'
    },
    devServer: {
        contentBase: distPath,
        compress: true,
        port: 9000,
        host: '0.0.0.0',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
                filename: 'test.html',
                template: 'src/tmpls/test.pug'
            })
    ],
    module: {
        rules: [
            {
                test: /\.jsx*$/,
                loader: 'babel-loader',
                query: {
                  plugins: [
                    'transform-react-jsx',
                    [
                      'react-css-modules',
                      {
                        context
                      }
                    ]
                  ]
                },
                exclude: [nodeModulesPath]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: [nodeModulesPath]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        query: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        query: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    }
}

module.exports = config;
