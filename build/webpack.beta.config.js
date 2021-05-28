'use strict';
const path = require('path');
const utils = require('./utils');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const marked = require("marked");
const renderer = new marked.Renderer();

const S3_PATH = '';

module.exports = {
    mode: 'production',
    entry: {
        app: ['babel-polyfill', './examples/index.ts'],
    },
    output: {
        filename: 'static/js/[name].[chunkhash].js',
        publicPath: S3_PATH,
        path: path.resolve('dist')
    },
    mode: process.env.NODE_ENV,
    resolve: {
        extensions: [".ts", ".js", ".vue", ".scss"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'assets': utils.resolve('src/assets')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "static/css/[name].[hash].css",
            chunkFilename: "static/css/[id].[hash].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader"
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            pedantic: false,
                            breaks: false,
                            renderer
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        ts: 'ts-loader!tslint-loader'
                    }
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                },
                    'tslint-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'static/img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'static/fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    }
};

