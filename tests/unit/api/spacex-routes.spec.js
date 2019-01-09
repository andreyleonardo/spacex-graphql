const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const {
  launchApi,
  launchesApi,
  rocketsApi,
  launchesURL,
  rocketsUrl
} = require('../../../src/api/spacex-routes');

const mock = new MockAdapter(axios);

describe('SpaceX Apis', () => {
  describe('Launches Api', () => {
    it('returns an array of data when called', async () => {
      const expected = [{
        param_1: 1,
        param_2: 2
      }];
      mock.onGet(launchesURL).reply(200, expected);

      const result = await launchesApi();

      expect(result.data).toEqual(expected);
    });

    it('returns an object data when called', async () => {
      const id = 1;
      const expected = {
        param_1: 1,
        param_2: 2
      };

      mock.onGet(`${launchesURL}/${id}`).reply(200, expected);

      const result = await launchApi(id);

      expect(result.data).toEqual(expected);
    });
  });
  describe('Rockets Api', () => {
    it('returns an array of data when called', async () => {
      const expected = [{
        param_1: 1,
        param_2: 2
      }];
      mock.onGet(rocketsUrl).reply(200, expected);

      const result = await rocketsApi();

      expect(result.data).toEqual(expected);
    });
  });
});
