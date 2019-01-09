const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { graphql } = require('graphql');
const schema = require('../../../src/graphql/schema');
const { rocketsUrl } = require('../../../src/api/spacex-routes');

const mock = new MockAdapter(axios);

describe('Rockets GraphQL', () => {
  const rocket = {
    rocket_id: "falcon9",
    rocket_name: "Falcon 9",
    rocket_type: "FT"
  };

  it('returns all rockets when called', async () => {
    const expected = {
      data: {
        rockets: [rocket]
      }
    };

    const query = `
      query {
        rockets {
          rocket_id
          rocket_name
          rocket_type
        }
      }
    `;

    mock.onGet(rocketsUrl).reply(200, expected.data.rockets);
    const result = await graphql(schema, query);
    return expect(result).toEqual(expected);
  });
})
