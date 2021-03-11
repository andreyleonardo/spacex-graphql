# SpaceX GraphQL Server | Node + GraphQL Example

This is a [Node](https://nodejs.org/dist/latest-v10.x/docs/api/) + [GraphQL](https://graphql.org) server that calls [SpaceX API](https://documenter.getpostman.com/view/2025350/RWaEzAiG), to fetch some launches and rockets data.

This is just a POC (proof of concept), so a few tests could be missing, but I'll try to add as many tests cases as possible to understand how to test a Node GraphQL server.

It's written in Node 10.5.0 with [expressjs](http://expressjs.com/) and [express-graphql](https://graphql.org/graphql-js/express-graphql/).

## Scripts

### Setup

Run the following command to install all necessary dependencies.

#### `npm install or yarn`

### Run locally

#### `npm run start:dev or yarn start:dev`

This will run the server in development mode with [nodemon](https://nodemon.io) at [http://localhost:4000/graphql](http://localhost:4000/graphql).

In development [GraphiQL](https://github.com/graphql/graphiql) will be available to run and test the queries.

### Run tests

#### `npm run test or yarn test`

Will run all application tests in watch mode.

For tests it's using [Jest](https://jestjs.io).

## Schemas
These are the available schemas mapped from SpaceX API.
You can add as many properties as you want to these available schemas to fetch more data and create new schemas and resolvers to fetch different data.

### Types

#### Launch
```graphql
type Launch {
  flight_number: Int
  mission_name: String
  launch_year: String
  launch_date_local: String
  launch_success: Boolean
  rocket: Rocket
}
```

#### Rocket

```graphql
type Rocket {
  rocket_id: String
  rocket_name: String
  rocket_type: String
}
```

### Queries
```graphql
type Query {
  launches: [Launch]
  launch(flight_number: Int!): Launch
  rockets: [Rocket]
}
```
