const path = require('path');
const postcssNested = require('postcss-nested');
const postcssCustomMedia = require('postcss-custom-media');
const postcssImport = require('postcss-import');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssnano = require('cssnano');

const { IS_DEV } = require('../env');

export default {
    client: {
        test: /\.css$/,
        use: [
            IS_DEV && 'css-hot-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        postcssImport({
                            path: path.resolve('src/styles'),
                        }),
                        postcssCustomMedia(),
                        postcssNested(),
                        !IS_DEV && cssnano({ preset: 'default' }),
                    ].filter(Boolean),
                },
            },
        ].filter(Boolean),
    },
    server: {
        test: /\.css$/,
        loader: 'null-loader',
    },
};
