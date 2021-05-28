'use strict';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const utils = require('./utils');

const port = 8085;

// marked
const marked = require("marked");
const renderer = new marked.Renderer();

renderer.heading = (text, level) => {
    return `<n-text class="marked-text" h${level}>${text}</n-text>`;
}

renderer.paragraph = (text) => {
    return `<n-text class="marked-text" p>${text}</n-text>`;
};

renderer.table = (header, body) => {
    return `
    <n-table>
        <table>
            ${header}
            ${body}
        </table>
    </n-table>
    `;
}
//

module.exports = {
    mode: 'development',
    devServer: {
        clientLogLevel: 'error',
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: '0.0.0.0',
        disableHostCheck: true,
        port,
        overlay: true,
        publicPath: '/',
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: false,
        }
    },
    devtool: 'source-map',
    entry: {
        app: ['babel-polyfill', './examples/index.ts']
    },
    output: {
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: [".ts", ".js", ".vue", ".scss"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'assets': utils.resolve('src/assets')
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin({
            compilationSuccessInfo: {
                messages: [`서버 실행 완료 http://localhost:${port}`],
            }
        })
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
                        ts: 'ts-loader'
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
                }]
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

