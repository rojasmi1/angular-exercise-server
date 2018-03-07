# Angular Server Exercise

## Requirements

* node >= 8.9.0

## Environment variables

This is a list of the environment variables required to run the server

* NODE_ENV: `development` or `production`
* PORT: The port where the API will be exposed
* PGHOST: Postgres DB host
* PGUSER: Postgres user with access to the database
* PGPASSWORD: Postgres user's password
* PGDATABASE: The database name
* PGPORT: Database port (5432)

Note: Define the variables globally in the server machine or add them to a `variables.env` file in the root of the project.

## Running the project

* `npm run build`: Compile typescript
* `npm run start:dev`: Run server in dev mode
* `npm run start:prod`: Run Unit Tests
* `npm run lint`: Check for sintax errors with eslint 
* `npm run lint:fix`: Check for sintax errors but fixing them when possible
* `npm run test`: Run unit tests
