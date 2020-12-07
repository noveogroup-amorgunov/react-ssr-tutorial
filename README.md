# React Server Side Rendering Tutorial

> :rocket: A project starter with server side rendering for React application with react-router, redux state, react-helmet, redux-saga and code-splitting. See live demo: [http://bit.do/react-ssr-demo](http://bit.do/react-ssr-demo).

![](https://github.com/noveogroup-amorgunov/react-ssr-tutorial/raw/master/static/preview.gif)

### Features

-   **Actual stack** (React / Hooks / Redux / Redux-saga)
-   Fully typed by **Typescript**
-   **A lot of small improvements**: component to control code status, pages stub, fetch data on server, code splitting by loadable-components and preload bundles by hover:

![](https://github.com/noveogroup-amorgunov/react-ssr-tutorial/raw/master/static/preview-preload-bundles.gif)

### Step-by-step branches

You can choose a specific branch at a specific development step:

-   [client-side-version](https://github.com/noveogroup-amorgunov/react-ssr-tutorial/tree/client-side-version) - Basic version of app without SSR
-   [01-prepare-webpack-and-express-server](https://github.com/noveogroup-amorgunov/react-ssr-tutorial/tree/01-prepare-webpack-and-express-server) - Prepare webpack config for server bundle and setup express server
-   [02-add-redux-and-react-router](https://github.com/noveogroup-amorgunov/react-ssr-tutorial/tree/) - Integrate redux and react-router with SSR
-   [03-add-react-helmet](https://github.com/noveogroup-amorgunov/react-ssr-tutorial/tree/03-add-react-helmet) - Add React-helmet for metatags
-   [04-add-redux-saga-and-async-data](https://github.com/noveogroup-amorgunov/react-ssr-tutorial/tree/04-add-redux-saga-and-async-data) - Run Redux-saga and fetch data on server side
-   [05-add-code-splitting](https://github.com/noveogroup-amorgunov/react-ssr-tutorial/tree/05-add-code-splitting) - Add cofe-splitting and lazy loading

### Getting started

Install dependencies:

```
npm install
```

Run development mode:

```
npm start
```

Now application is available in [http://localhost:9001](http://localhost:9001).

Build production bundle:

```
npm run build
```

Or run inside docker container:

```
npm run build
npm run docker
```
