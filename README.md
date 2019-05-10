# React Server Side Rendering Tutorial

:rocket: A project starter with server side rendering for React application.
See live demo: [http://bit.do/react-ssr-demo](http://bit.do/react-ssr-demo).

![](https://github.com/noveogroup-amorgunov/react-ssr-tutorial/raw/master/preview.gif)


## Features

- :koala: Actual stack: React 16.8 + Redux+saga / Babel7 / Webpack 4 / postcss / eslint
- :panda_face: Step by step branches
- :pig: Async fetch data on server + code splitting by loadable-components
- :ru: [Slides](https://bit.do/react-ssr-slides) about server side rendering

## Getting started

Install dependencies:

```
npm install
```

Run dev mode:

```
npm start
```

Now application is available in [http://localhost:9001](http://localhost:9001).

Build production bundle and start server:

```
npm run build:production
NODE_ENV=production node index.js
```

Or run inside docker container:

```
npm run build:production
npm run docker
```
