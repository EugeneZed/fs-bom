// src/server.js

import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import {routes} from '../client/js/Routes';
import NotFoundPage from '../client/js/components/NotFoundPage';
import BodyParser from 'body-parser';
import addBom from './api/addBom';
import getBoms from './api/getBoms';
import getBomItems from './api/getBomItems';
import scrapeVendorSite from './api/scrape/scrapeVendorSite';
import { Provider } from 'react-redux';
import store from '../client/js/store';

// console.log(routes);

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/views'));
// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, '../client/www')));
app.use(BodyParser.json()); // support json encoded bodies
app.use(BodyParser.urlencoded({ extended: true })); // support encoded bodies


/*========= API =========== */

app.post("/api/addBom", (req,res) => {
  res.send(JSON.stringify(addBom(req.body)));
});

app.post("/api/getBoms", (req,res) => {
  res.send(JSON.stringify(getBoms()));
});

app.post("/api/getBomItems", (req,res) => {
  res.send(JSON.stringify(getBomItems(req.body)));
});
app.post("/api/scrapeVendorSite", (req,res) => {
  res.send(JSON.stringify(scrapeVendorSite(req.body)));
});

// universal routing and rendering
app.get('*', (req, res) => {
        console.log(req.url);

  match(
    { routes: routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        var InitialComponent = (
          <Provider store={store}>
              <RouterContext {...renderProps} />
          </Provider>
        );
        markup = renderToString(InitialComponent);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
