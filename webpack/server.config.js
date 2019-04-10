const path = require('path');
const nodeExternals = require('webpack-node-externals');

const { SERVER_DIR, DIST_DIR } = require('./env');
const fileLoader = require('./loaders/file');
const cssLoader = require('./loaders/css');
const jsLoader = require('./loaders/js');

module.exports = {
    name: 'server',
    target: 'node',
    node: { __dirname: false },
    devtool: 'source-map',
    entry: path.join(SERVER_DIR, 'server'),
    module: {
        rules: [
            fileLoader.server,
            cssLoader.server,
            jsLoader.server
        ]
    },
    output: {
        filename: 'server.js',
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
        publicPath: '/static/'
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json']
    },
    externals: [nodeExternals({ whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i] })],
    optimization: { nodeEnv: false }
};
