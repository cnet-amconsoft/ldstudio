'use strict';

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';


// Set the relative paths.
const bundleFolder = __dirname + "/wwwroot/assets/dist";
const srcFolder = __dirname + "/ReactApp/";


module.exports = {
    mode: 'development',
    entry: { main: srcFolder + "index.jsx" },
    output: {
        publicPath: "assets/",
        path: path.resolve(__dirname, bundleFolder),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]',
                        }
                    },
                    'sass-loader',
                ],
            }   
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        mainFields: ['index']
    }
};