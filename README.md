# React Server Side Rendering Tutorial

:rocket: A project starter with server side rendering for React application.
See live demo: [http://bit.do/react-ssr-demo](http://bit.do/react-ssr-demo).

![](https://github.com/noveogroup-amorgunov/react-ssr-tutorial/raw/master/static/preview.gif)

## Features

- :koala: Actual stack: React / Hooks / Redux / Redux-saga;
- :panda_face: Fully typed by Typescript;
- :pig: Async fetch data on server, code splitting by loadable-components and preload bundles by hover:

![](https://github.com/noveogroup-amorgunov/react-ssr-tutorial/raw/master/static/preview-preload-bundles.gif)

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

For addition information see [slides](https://bit.do/react-ssr-slides) about server side rendering, which contains step-by-step tutorial (on Russian :ru:).
