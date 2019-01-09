const glue = require('schemaglue');
const { schema } = glue('src/graphql/launch');

describe('Launch Schema', () => {
  it('schema matches with snapshot', () => {
    expect(schema).toMatchSnapshot();
  });
});
