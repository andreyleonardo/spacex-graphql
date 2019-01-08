const axios = require('axios');

const launchesURL = 'https://api.spacexdata.com/v3/launches';
const rocketsUrl = 'https://api.spacexdata.com/v3/rockets';

const launchesApi = () => axios.get(launchesURL);
const launchApi = flight_number => axios.get(`${launchesURL}/${flight_number}`);
const rocketsApi = () => axios.get(rocketsUrl);

module.exports = {
  launchesApi,
  launchApi,
  rocketsApi,
  launchesURL,
  rocketsUrl
};
