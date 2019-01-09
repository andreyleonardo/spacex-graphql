const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const graphqlRoute = require('./routes/graphql');

const app = express();

app.use(
  bodyParser.json(),
  cors(),
  graphqlRoute
);

module.exports = app;
