'use strict';
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
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
        extensions: [".ts", ".js", ".vue", ".scss"], // import 할때 자동으로 붙여줄 확장자. 예를들어 import 'vue'를 하면 vue.tsx, vue.ts, vue.js, vue.vue 순서대로 시도해서 import 해줌
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'assets': utils.resolve('src/assets') // assets에 접근할 때 필요한 alias
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({ // css를 Extract 하는 플러그인
            filename: "static/css/[name].[hash].css",
            chunkFilename: "static/css/[id].[hash].css"
        }),
        // new MiniCssExtractPlugin({ // css를 Extract 하는 플러그인
        //     filename: "static/css/[name].[hash].css",
        //     chunkFilename: "static/css/[id].[hash].css"
        // }),
        // new CopyWebpackPlugin([
        //     { from: 'images/*', to: '.' },
        //     { from: 'sitemap.xml', to: 'static/' }
        // ])
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
            // .vue 파일 로더 정의
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

