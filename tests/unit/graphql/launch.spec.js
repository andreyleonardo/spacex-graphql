const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { makeExecutableSchema } = require('graphql-tools');
const { graphql } = require('graphql');
const glue = require('schemaglue');
const { launchesURL } = require('../../../src/api/spacex-routes');

const mock = new MockAdapter(axios);
const { schema, resolver } = glue('src/graphql');

describe('Launches GraphQL', () => {
  let executableSchema;
  beforeEach(() => {
    executableSchema = makeExecutableSchema({ typeDefs: schema, resolvers: resolver });
  });

  it('returns all launches when called', async () => {
    const expected = {
      data: {
        launches: [
          {
            flight_number: 1,
            mission_name: "mission name",
            launch_year: "2018",
            launch_date_local: "2018-12-05T13:16:00-05:00",
            launch_success: true,
            rocket: {
              rocket_id: "falcon9",
              rocket_name: "Falcon 9",
              rocket_type: "FT"
            }
          }
        ]
      }
    };

    const query = `
      query {
        launches {
          flight_number
          mission_name
          launch_year
          launch_date_local
          launch_success
          rocket {
            rocket_id
            rocket_name
            rocket_type
          }
        }
      }
    `;

    mock.onGet(launchesURL).reply(200, expected.data.launches);
    const result = await graphql(executableSchema, query);
    return expect(result).toEqual(expected);
  });

  it('returns a launch when called', async () => {
    const expected = {
      data: {
        launch: {
          flight_number: 1,
          mission_name: "mission name",
          launch_year: "2018",
          launch_date_local: "2018-12-05T13:16:00-05:00",
          launch_success: true,
          rocket: {
            rocket_id: "falcon9",
            rocket_name: "Falcon 9",
            rocket_type: "FT"
          }
        }
      }
    };

    const query = `
      query {
        launch(flight_number: 1) {
          flight_number
          mission_name
          launch_year
          launch_date_local
          launch_success
          rocket {
            rocket_id
            rocket_name
            rocket_type
          }
        }
      }
    `;
    mock.onGet(`${launchesURL}/${1}`).reply(200, expected.data.launch);
    const result = await graphql(executableSchema, query);
    return expect(result).toEqual(expected);
  });
})
