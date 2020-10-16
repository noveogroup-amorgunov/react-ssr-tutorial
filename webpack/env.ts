const path = require('path');

const IS_DEV = process.env.NODE_ENV !== 'production';
const SRC_DIR = path.join(__dirname, '../src');
const DIST_DIR = path.join(__dirname, '../dist');

export { IS_DEV, SRC_DIR, DIST_DIR };
