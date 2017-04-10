'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const distPath = path.resolve(__dirname, 'dist');
const context = path.resolve(__dirname, 'src');

const config = {
    entry: './src/index.js',
    output: {
        path: distPath,
        filename: 'bundle_[name]_[hash:6].js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        host: '0.0.0.0',
        hot: true
    },
    plugins: [
        //Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
                filename: 'test.html',
                template: 'src/tmpls/test.pug'
            }),
        new CompressionPlugin({
                asset: "[path].gz[query]",
                algorithm: "gzip",
                test: /\.js$|\.css$|\.html$/,
                threshold: 10240,
                minRatio: 0.8
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

};

module.exports = config;
