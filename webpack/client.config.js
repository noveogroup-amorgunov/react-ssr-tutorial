const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { IS_DEV, DIST_DIR, SRC_DIR } = require('./env');
const fileLoader = require('./loaders/file');
const cssLoader = require('./loaders/css');
const jsLoader = require('./loaders/js');

module.exports = {
    entry: [
        IS_DEV && 'webpack-hot-middleware/client',
        IS_DEV && 'css-hot-loader/hotModuleReplacement',
        path.join(SRC_DIR, 'client')
    ].filter(Boolean),
    module: {
        rules: [
            fileLoader.client,
            cssLoader.client,
            jsLoader.client
        ]
    },
    output: {
        path: DIST_DIR,
        filename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json'],
        alias: { 'react-dom': '@hot-loader/react-dom' }
    },
    devServer: {
        contentBase: DIST_DIR,
        compress: false,
        port: 9000,
        historyApiFallback: true,
        publicPath: '/'
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        IS_DEV && new webpack.HotModuleReplacementPlugin()
        // new BundleAnalyzerPlugin()
    ].filter(Boolean)
};
