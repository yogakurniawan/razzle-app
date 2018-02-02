import App from './containers/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
// Import the StyledComponents SSR util
import { ServerStyleSheet } from 'styled-components';

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    // Create the server side style sheet
    const sheet = new ServerStyleSheet();
    const context = {};
    // When the app is rendered collect the styles that are used inside it
    const markup = renderToString(sheet.collectStyles(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    ));
    // Generate all the style tags so they can be rendered into the page
    const styleTags = sheet.getStyleTags();
    
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
    <html lang="">
    <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${styleTags}
    </head>
    <body>
        <div id="root">${markup}</div>
    </body>
</html>`
      );
    }
  });

export default server;
