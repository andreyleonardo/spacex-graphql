const { launchApi, launchesApi } = require('../../api/spacex-routes');

// TODO: Adds error treatment

exports.resolver = {
  Query: {
    async launches() {
      const response = await launchesApi();
      return response.data;
    },
    async launch(parent, { flight_number }) {
      const response = await launchApi(flight_number);
      return response.data;
    }
  }
};
