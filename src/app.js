const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const graphqlRoute = require('./routes/graphql');

const morganConfig = morgan(':method :url :status - :response-time ms');

const app = express();

app.use(
  bodyParser.json(),
  cors(),
  morganConfig,
  graphqlRoute
);

module.exports = app;
