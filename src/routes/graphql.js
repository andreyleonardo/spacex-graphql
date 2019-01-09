const { Router } = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../graphql/schema');
const router = new Router();

const enableGraphiQL = process.env.NODE_ENV === 'development';

router.use('/graphql', graphqlHTTP({
  schema,
  graphiql: enableGraphiQL
}));

module.exports = router;
