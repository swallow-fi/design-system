'use strict';
const path = require('path');
const utils = require('./utils');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: ['./src/index.ts'],
    },
    output: {
        filename: 'noir.js',
        path: path.resolve('../frontend/src/noir'),
        library: 'libpack',
        libraryTarget: 'umd'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: false
                },
            })
        ]
    },
    resolve: {
        extensions: [".ts", ".js", ".vue", ".scss"], // import 할때 자동으로 붙여줄 확장자. 예를들어 import 'vue'를 하면 vue.tsx, vue.ts, vue.js, vue.vue 순서대로 시도해서 import 해줌
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'assets': utils.resolve('src/assets') // 이게 있어야 파일이 생성됨...
        }
    },
    plugins: [
        new MiniCssExtractPlugin({ // css를 Extract 하는 플러그인
            filename: "static/css/[name].[hash].css",
            chunkFilename: "static/css/[id].[hash].css"
        }),
        // new CopyWebpackPlugin([
        //     { from: 'src/assets/**/*', to: './static' }
        // ])
    ],
    module: {
        rules: [
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
                test: /\.scss$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: 'static/img/[name].[hash:7].[ext]',
                    publicPath: '../../'
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

