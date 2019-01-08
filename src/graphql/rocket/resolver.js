const { rocketsApi } = require('../../api/spacex-routes');

exports.resolver = {
  Query: {
    async rockets() {
      const response = await rocketsApi();
      return response.data;
    }
  }
};
