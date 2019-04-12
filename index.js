const app = require('./dist/server.js').default;

const port = process.env.PORT || 9001;

app.listen(port, () => {
    console.log('Application env: %s', process.env.NODE_ENV);
    console.log('Application is started on :%s', port);
});
