import path from 'path';
import express from 'express';
import 'babel-polyfill';

import hotMiddleware from './server-hot-middleware';
import renderMiddleware from './server-render-middleware';

const IS_DEV = process.env.NODE_ENV !== 'production';
const app = express();

// WARNING: Only for developing.
// In production I recommend use nginx or CDN
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(express.static(path.resolve(__dirname, '../static')));

app.get('/*', IS_DEV ? hotMiddleware : renderMiddleware);

export default app;
