import { Configuration } from 'webpack';
import * as webpack from 'webpack';
import * as path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
// @ts-ignore
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// @ts-ignore
import CompressionPlugin from 'compression-webpack-plugin';
import LoadablePlugin from '@loadable/webpack-plugin';
import { IS_DEV, DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';

const config: Configuration = {
    entry: [
        IS_DEV && 'webpack-hot-middleware/client',
        IS_DEV && 'css-hot-loader/hotModuleReplacement',
        path.join(SRC_DIR, 'client'),
    ].filter(Boolean),
    module: {
        rules: [fileLoader.client, cssLoader.client, jsLoader.client],
    },
    output: {
        path: DIST_DIR,
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        modules: ['src', 'node_modules'],
        alias: { 'react-dom': '@hot-loader/react-dom' },
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    // devServer: {
    //     contentBase: DIST_DIR,
    //     compress: false,
    //     port: 9000,
    //     historyApiFallback: true,
    //     publicPath: '/'
    // },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        IS_DEV && new webpack.HotModuleReplacementPlugin(),
        !IS_DEV && new CompressionPlugin(),
        new LoadablePlugin(),
        // new BundleAnalyzerPlugin()
    ].filter(Boolean),

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'source-map',

    performance: {
        hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
    },
};

export default config;
