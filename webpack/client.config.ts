import path from 'path';
import { Configuration, Plugin, Entry } from 'webpack';
import { Configuration as WebpackDevSeverConfig } from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

import { IS_DEV, DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';

type Config = Configuration & {
    devServer: WebpackDevSeverConfig;
};

const config: Config = {
    entry: ([
        IS_DEV && 'react-hot-loader/patch',
        IS_DEV && 'webpack-hot-middleware/client',
        IS_DEV && 'css-hot-loader/hotModuleReplacement',
        path.join(SRC_DIR, 'client'),
    ].filter(Boolean) as unknown) as Entry,
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
    devServer: {
        contentBase: DIST_DIR,
        hot: true,
        compress: false,
        port: 9000,
        historyApiFallback: true,
        publicPath: '/',
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        !IS_DEV && new CompressionPlugin(),
        // @ts-ignore
        new CopyWebpackPlugin([{ from: 'static/images', to: 'images' }]),
        new HtmlWebpackPlugin({
            template: path.resolve(SRC_DIR, 'index.html'),
        }),
    ].filter(Boolean) as Plugin[],

    devtool: 'source-map',

    performance: {
        hints: IS_DEV ? false : 'warning',
    },
};

export default config;
