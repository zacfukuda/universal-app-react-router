# Simple Universal React App with React Router & Express.js

*Published August 1st, 2017* 

This repository is a sample code of the very, very simple Universal React Application, using [React Router](https://github.com/ReactTraining/react-router) version 4 and Express.js.

The official tutorial will be available at [https://www.mokuji.me](https://www.mokuji.me) shortly.

> This project was initialized with [create-react-app](https://github.com/facebookincubator/create-react-app) and had been developed using its default npm script for the development of the client side app. The new script is added to run the server side app.

## Motivation
This sample code provides the example of how to render __data-fetched HTML on the server side__ in order to improve SEO.

There are many tutorials covering the universal app and React Router. There are, however, only a few that’re concerning the practical use of React. In most tutorials, the sample code contains `data` values pre-defined inside Javascript file, although those datas are usualy fetched from the server on the client side in the real-world app. Just simply fetcing data on the server side does’t render the HTML component that you want it to be rendered because those data-based components return the result of `render()` before finishing fetching data.

## Use
Clone the repo and change the current directory:
```bash
$ git clone https://github.com/zacfukuda/universal-app-react-router
$ cd universal-app-react-router
```
Install the packages:
```bash
$ yarn
// Or if you use npm:
$ npm install
```

### Frontend Single Page App
To develop as a client-side single-page app:
```bash
$ yarn start
```
The command will open the browser navigating to (localhost:3000)[http://localhost:3000] and it will refresh browser everytime you modify the files under `src` directory.

### Frontend Single Page App
Build the app:
```bash
$ yarn build
```

Modify the `div` element to `<div id="root"><%- html %></div>` inside of `build/index.html`.
Then change the name of the file:
```bash
$ mv build/index.html build/index.ejs
```

Run server:
```bash
$ yarn server
```

Visit [localhost:3000](http://localhost:3000) and the source of the home page or [the books page](http://localhost:3000/books). You’ll see the all contents are rendered from the server.

### If not change the name to index.ejs
If you are opening `/` page, you can still refresh the app. But if you are at the lower page such as `/books`, `/about`, you get the error when you refesh due to the app can’t find the corresponding view file.

## Reference
### Doc & Repo
- [React Router on Github](https://github.com/ReactTraining/react-router)
- [React Training / Router Router](https://reacttraining.com/react-router/)
- [Create React App](https://github.com/facebookincubator/create-react-app) (react-script)
- [React Official Document](https://facebook.github.io/react/)
- [React on Github](https://github.com/facebook/react)
- [Express.js Official Document](https://expressjs.com/)
- [Express.js on Github](https://github.com/expressjs/express)
- [isomorphic-fetch on Github](https://github.com/matthew-andrews/isomorphic-fetch)

### Tutorial & Sample Code
- [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
- [React on the Server for Beginners: Build a Universal React and Node App](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app)
- [Universal JavaScript Apps with React Router 4](https://ebaytech.berlin/universal-web-apps-with-react-router-4-15002bb30ccb)
- [Using create-react-app with React Router + Express.js](https://medium.com/@patriciolpezjuri/using-create-react-app-with-react-router-express-js-8fa658bf892d)
- [Server Side Rendering with React Router — We must React](https://medium.com/@foxhound87/server-side-rendering-with-react-router-we-must-react-ep-04-ad03b6b9e05d)
- [React, routing, and data fetching](https://medium.com/@taion/react-routing-and-data-fetching-ec519428135c)
- [Server Rendering](https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md)
- [React Server Side Rendering With Node And Express](https://www.smashingmagazine.com/2016/03/server-side-rendering-react-node-express/)
- [Example Node Server w/ Babel](https://github.com/babel/example-node-server)