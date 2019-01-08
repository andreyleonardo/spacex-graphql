const { makeExecutableSchema } = require('graphql-tools');
const glue = require('schemaglue');

const { schema, resolver } = glue('src/graphql');

const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolver
});

module.exports = executableSchema;
