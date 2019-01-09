const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { graphql } = require('graphql');
const schema = require('../../../src/graphql/schema');
const { launchesURL } = require('../../../src/api/spacex-routes');

const mock = new MockAdapter(axios);

describe('Launches GraphQL', () => {
  const fragment = `
    fragment launchFields on Launch {
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
  `
  const launch = {
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
  };

  it('returns all launches when called', async () => {
    const expected = {
      data: {
        launches: [launch]
      }
    };

    const partialQuery = `
      query {
        launches {
          ...launchFields
        }
      }
    `;
    const query = partialQuery + fragment;

    mock.onGet(launchesURL).reply(200, expected.data.launches);
    const result = await graphql(schema, query);
    return expect(result).toEqual(expected);
  });

  it('returns a launch when called', async () => {
    const expected = {
      data: {
        launch
      }
    };

    const partialQuery = `
      query {
        launch(flight_number: 1) {
          ...launchFields
        }
      }
    `;
    const query = partialQuery.concat(fragment);

    mock.onGet(`${launchesURL}/${1}`).reply(200, expected.data.launch);
    const result = await graphql(schema, query);
    return expect(result).toEqual(expected);
  });
})
