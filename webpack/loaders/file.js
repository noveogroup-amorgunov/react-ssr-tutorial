const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;

module.exports = {
    client: {
        loader: 'url-loader',
        test: fileRegex
    },
    server: {
        loader: 'null-loader',
        test: fileRegex
    }
};
