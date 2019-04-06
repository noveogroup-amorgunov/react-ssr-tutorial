const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

const { IS_DEV, DIST_DIR, SRC_DIR } = require('./env');
const fileLoader = require('./loaders/file');
const cssLoader = require('./loaders/css');
const jsLoader = require('./loaders/js');

module.exports = {
    entry: [
        IS_DEV && 'css-hot-loader/hotModuleReplacement',
        path.join(SRC_DIR, 'client')
    ].filter(Boolean),
    module: {
        rules: [
            fileLoader,
            cssLoader,
            jsLoader
        ]
    },
    output: {
        path: DIST_DIR,
        filename: IS_DEV ? '[name].js' : '[name].[hash].js',
        publicPath: '/'
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json']
    },
    devServer: {
        contentBase: DIST_DIR,
        compress: false,
        port: 9000,
        historyApiFallback: true,
        publicPath: '/'
    },
    plugins: [
        new WriteFilePlugin(),
        new CopyWebpackPlugin([{ from: 'static/images', to: 'images' }]),
        new MiniCssExtractPlugin({ filename: IS_DEV ? '[name].css' : '[name].[hash].css' }),
        IS_DEV && new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: 'src/index.html' })
        // new BundleAnalyzerPlugin()
    ].filter(Boolean)
};
