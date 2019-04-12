import path from 'path';
import express from 'express';
import compression from 'compression';
import 'babel-polyfill';

const IS_DEV = process.env.NODE_ENV !== 'production';
const app = express();

// WARNING: Only for developing.
// In production I recommend use nginx or CDN
app.use(compression());
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, '../static')));


app.get('/*', IS_DEV
    ? require('./server-hot-middleware').default
    : require('./server-render-middleware').default);

export default app;
