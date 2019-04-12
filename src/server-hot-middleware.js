import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import webpackConfig from '../webpack/client.config';
import renderMiddleware from './server-render-middleware';

const compiler = webpack({ ...webpackConfig, mode: 'development' });

export default [
    devMiddleware(compiler, {
        logLevel: 'error',
        publicPath: webpackConfig.output.publicPath,
        writeToDisk(filePath) {
            return /loadable-stats/.test(filePath);
        }
    }),
    hotMiddleware(compiler),
    renderMiddleware
];
