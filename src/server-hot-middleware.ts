import * as webpack from 'webpack';
import { Configuration } from 'webpack';
import * as devMiddleware from 'webpack-dev-middleware';
import * as hotMiddleware from 'webpack-hot-middleware';

import clientWebpackConfig from '../webpack/client.config';
import renderMiddleware from './server-render-middleware';

const compiler = webpack({
    ...clientWebpackConfig,
    mode: 'development',
} as Configuration);

export default [
    devMiddleware(compiler, {
        logLevel: 'error',
        publicPath: clientWebpackConfig.output.publicPath,
        writeToDisk(filePath: string) {
            return /loadable-stats/.test(filePath);
        },
    }),
    hotMiddleware(compiler),
    renderMiddleware,
];
