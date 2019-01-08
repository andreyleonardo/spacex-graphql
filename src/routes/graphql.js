const { Router } = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../graphql/schema');
const router = new Router();
router.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

module.exports = router;
