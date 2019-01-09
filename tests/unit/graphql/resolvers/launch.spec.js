const { resolver } = require('../../../../src/graphql/launch/resolver');
const { launchesApi, launchApi } = require('../../../../src/api/spacex-routes');

jest.mock('../../../../src/api/spacex-routes');

const mockLaunchReturn = {
    launch_id: 1
};
const mockLaunchesReturn = [mockLaunchReturn];

launchApi.mockReturnValue({ data: mockLaunchReturn });
launchesApi.mockReturnValue({ data: mockLaunchesReturn });

describe('Launch Resolvers', () => {
  const { Query } = resolver;
  it('resolves launches when called', async () => {
    const result = await Query.launches();

    expect(result).toEqual(mockLaunchesReturn);
  });

  it('resolves launch when called', async () => {
    const flight_number = 1;
    const result = await Query.launch(null, { flight_number });

    expect(result).toEqual(mockLaunchReturn);
  });
});
