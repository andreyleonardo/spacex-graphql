const { resolver } = require('../../../../src/graphql/rocket/resolver');
const { rocketsApi } = require('../../../../src/api/spacex-routes');

jest.mock('../../../../src/api/spacex-routes');

const mockRocketsReturn = [{
  rocket_id: 1
}];

rocketsApi.mockReturnValue({ data: mockRocketsReturn });

describe('Rocket Resolvers', () => {
  const { Query } = resolver;
  it('resolves rockets when called', async () => {
    const result = await Query.rockets();

    expect(result).toEqual(mockRocketsReturn);
  });
});
