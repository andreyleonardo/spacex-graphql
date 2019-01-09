const glue = require('schemaglue');
const { schema } = glue('src/graphql/rocket');

describe('Rocket Schema', () => {
  it('schema matches with snapshot', () => {
    expect(schema).toMatchSnapshot();
  });
});
