const express = require('express');
const bodyParser = require('body-parser');
const graphqlRoute = require('./routes/graphql');

const app = express();

app.use(
  bodyParser.json(),
  graphqlRoute
);

module.exports = app;
