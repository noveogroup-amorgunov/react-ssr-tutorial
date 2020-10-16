const fileRegex = /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/;

export default {
    loader: 'url-loader',
    test: fileRegex,
};
