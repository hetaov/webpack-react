'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const distPath = path.resolve(__dirname, 'dist');

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
                exclude: [nodeModulesPath]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: [nodeModulesPath]
            }
        ]
    }

};

module.exports = config;
