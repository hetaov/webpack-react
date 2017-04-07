'use strict';

const path = require('path');
const webpack = require('webpack');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const distPath = path.resolve(__dirname, 'www');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                exclude: [nodeModulesPath]
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                exclude: [nodeModulesPath]
            }
        ]
    }
}

module.exports = config;
