export default {
    test: /\.ts(x?)$/,
    exclude: /node_modules/,
    use: { loader: 'babel-loader' },
};
